import { DragDropContext, OnDragEndResponder } from "@hello-pangea/dnd";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDataProvider, useListContext } from "react-admin";
import { useMutation } from "react-query";
import type { Task } from ".";
import { TasksByStatus, getTasksByStatus, statuses } from ".";
import { MyDataProvider } from "../dataProvider";
import { TaskColumn } from "./TaskColumn";

export const TaskListContent = () => {
  const { data: unorderedTasks, isLoading, refetch } = useListContext<Task>();
  const dataProvider = useDataProvider<MyDataProvider>();

  const [TasksByStatus, setTasksByStatus] = useState<TasksByStatus>(
    getTasksByStatus([])
  );

  useEffect(() => {
    if (unorderedTasks) {
      const newTasksByStatus = getTasksByStatus(unorderedTasks);
      if (newTasksByStatus !== TasksByStatus) {
        setTasksByStatus(newTasksByStatus);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unorderedTasks]);

  const mutation = useMutation<
    void,
    Error,
    {
      source: Parameters<MyDataProvider["updateTaskStatus"]>[0];
      destination: Parameters<MyDataProvider["updateTaskStatus"]>[1];
    }
  >(
    ({ source, destination }) =>
      dataProvider.updateTaskStatus(source, destination),
    { onSettled: () => refetch() }
  );

  if (isLoading) return null;

  const onDragEnd: OnDragEndResponder = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceStatus = source.droppableId as Task["status"];
    const destinationStatus = destination.droppableId as Task["status"];
    const sourceTask = TasksByStatus[sourceStatus][source.index]!;
    const destinationTask = TasksByStatus[destinationStatus][
      destination.index
    ] ?? {
      status: destinationStatus,
      index: undefined, // undefined if dropped after the last item
    };

    // compute local state change synchronously
    setTasksByStatus(
      updateTaskStatusLocal(
        sourceTask,
        { status: sourceStatus, index: source.index },
        { status: destinationStatus, index: destination.index },
        TasksByStatus
      )
    );

    // trigger the mutation to persist the changes
    mutation.mutateAsync({
      source: sourceTask,
      destination: destinationTask,
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box display="flex">
        {statuses.map((status) => (
          <TaskColumn
            status={status}
            tasks={TasksByStatus[status]}
            key={status}
          />
        ))}
      </Box>
    </DragDropContext>
  );
};

const updateTaskStatusLocal = (
  sourceTask: Task,
  source: { status: Task["status"]; index: number },
  destination: {
    status: Task["status"];
    index?: number; // undefined if dropped after the last item
  },
  TasksByStatus: TasksByStatus
) => {
  if (source.status === destination.status) {
    // moving deal inside the same column
    const column = TasksByStatus[source.status];
    column.splice(source.index, 1);
    column.splice(destination.index ?? column.length + 1, 0, sourceTask);
    return {
      ...TasksByStatus,
      [destination.status]: column,
    };
  } else {
    // moving deal across columns
    const sourceColumn = TasksByStatus[source.status];
    const destinationColumn = TasksByStatus[destination.status];
    sourceColumn.splice(source.index, 1);
    destinationColumn.splice(
      destination.index ?? destinationColumn.length + 1,
      0,
      sourceTask
    );
    return {
      ...TasksByStatus,
      [source.status]: sourceColumn,
      [destination.status]: destinationColumn,
    };
  }
};
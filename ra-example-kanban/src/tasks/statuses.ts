import type { Task } from ".";

export const statusNames: Record<Task["status"], string> = {
    backlog: "Backlog",
    toDo: "To do",
    inProgress: "In progress",
    done: "Done"
};

export const statuses: Task["status"][] = [
    "backlog",
    "toDo",
    "inProgress",
    "done",
  ];

export type TasksByStatus = Record<Task["status"], Task[]>;

export const getTasksByStatus = (unorderedTasks: Task[]) => {
    const tasksByStatus: TasksByStatus = unorderedTasks.reduce(
        (acc, task) => {
            acc[task.status].push(task);
            return acc;
        },
        statuses.reduce(
            (obj, status) => ({ ...obj, [status]: [] }),
            {} as TasksByStatus
        )
    );

    statuses.forEach((status) => {
        tasksByStatus[status] = tasksByStatus[status].sort(
            (recordA: Task, recordB: Task) => recordA.index - recordB.index
        )
    });
    return tasksByStatus;
}
import { CreateButton, useRecordContext } from 'react-admin';
import { Box, Typography } from "@mui/material";
import { Droppable } from "@hello-pangea/dnd";

import { Task } from ".";
import { TaskCard } from "./TaskCard";
import { statusNames } from "./statuses";

export const TaskColumn = ({
    status,
    tasks,
}: {
    status: Task["status"];
    tasks: Task[];
}) => (
    <Box
        sx={{
            flex: 1,
            paddingTop: "8px",
            paddingBottom: "16px",
            bgcolor: "#eaeaee",
            "&:first-of-type": {
            paddingLeft: "5px",
            borderTopLeftRadius: 5,
            },
            "&:last-child": {
            paddingRight: "5px",
            borderTopRightRadius: 5,
            },
        }}
    >
        <Typography align="center" variant="h5" textTransform="uppercase">
            {statusNames[status]}
        </Typography>
        <Droppable droppableId={status}>
            {(droppableProvided, snapshot) => (
                <Box
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                    className={snapshot.isDraggingOver ? " isDraggingOver" : ""}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: 5,
                        padding: "5px",
                        "&.isDraggingOver": {
                            bgcolor: "#dadadf",
                        },
                    }}
                >
                    {tasks.map((task, position) => (
                        <TaskCard key={task.id} task={task} position={position} />
                        ))}
                    {droppableProvided.placeholder}
                </Box>
            )}
        </Droppable>
    </Box>
);
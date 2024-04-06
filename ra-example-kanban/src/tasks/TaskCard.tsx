import { Box, Card, CardContent, CardActions, Typography } from "@mui/material";
import { Draggable } from "@hello-pangea/dnd";

import type { Task } from ".";
import { Button, DeleteButton, EditButton, ShowButton, useRecordContext } from "react-admin";


export const TaskCard = ({ task, position }: { task: Task, position: number}) => {
    return (
    <Draggable draggableId={String(task.id)} index={position}>
    {(provided, snapshot) => (
        <Box sx={{ marginBottom: 1 }}
         {...provided.draggableProps}
         {...provided.dragHandleProps}
         ref={provided.innerRef}
        > 
            <Card
                style={{
                opacity: snapshot.isDragging ? 0.9 : 1,
                transform: snapshot.isDragging ? "rotate(-2deg)" : "",
                //cursor: pointer;
                }}
                elevation={snapshot.isDragging ? 3 : 1}
            >
                <CardContent>
                    <Typography variant="h5">
                        {task.title}
                    </Typography>
                    <Typography variant="body2">
                        {task.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <ShowButton resource="tasks" record={task} /> 
                    <EditButton resource="tasks" record={task} />
                    <DeleteButton resource="tasks" record={task} />
                </CardActions>
            </Card>
        </Box>
    )}
    </Draggable>
    )
}
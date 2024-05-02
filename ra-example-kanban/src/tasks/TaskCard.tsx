import * as React from 'react';
import { Box, Card, CardContent, CardActions, Typography, Modal } from "@mui/material";
import { Draggable } from "@hello-pangea/dnd";

import type { Task } from ".";
import { Button, DeleteButton, EditButton, ShowButton, ListButton, useRecordContext } from "react-admin";
import DeleteIcon from '@mui/icons-material/Delete';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    display: 'grid',
    gap: 2,
  };


export const TaskCard = ({ task, position }: { task: Task, position: number}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <Draggable draggableId={String(task.id)} index={position}>
    {(provided, snapshot) => (
        <Box sx={{ 
            marginBottom: 1,
            '&:hover': {
                cursor: 'pointer'
            }
        }}
         {...provided.draggableProps}
         {...provided.dragHandleProps}
         ref={provided.innerRef}
        > 
            <Card
                style={{
                    opacity: snapshot.isDragging ? 0.9 : 1,
                    transform: snapshot.isDragging ? "rotate(-2deg)" : "",
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
                    <Button onClick={handleOpen} label="Delete">
                        <DeleteIcon />
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" align='center'>
                                Are you sure you want to delete this task?
                            </Typography>
                            <DeleteButton resource="tasks" record={task} />
                            <ListButton label='Go back to the board' onClick={handleClose}/>
                        </Box>
                    </Modal>
                </CardActions>
            </Card>
        </Box>
    )}
    </Draggable>
    )
}
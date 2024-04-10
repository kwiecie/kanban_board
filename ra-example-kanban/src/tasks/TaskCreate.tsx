import * as React from 'react';
import { Create, SimpleForm, TextInput, SelectInput, required, ListButton } from 'react-admin';
import { Box, Button, Typography, Modal } from "@mui/material";

const Aside = () => (
    <Box sx={{ width: '200px', margin: '1em' }}>
        <Typography variant="h6">Instructions</Typography>
        <Typography variant="body2">
            Posts will only be published once an editor approves them
        </Typography>
    </Box>
  );


  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  export function TaskCreate() {  
    return (
        <Create>
            <ListButton label='Go back to the board'/>
            <SimpleForm>
                <TextInput disabled label="Id" source="id" />
                <TextInput source="title" validate={[required()]} />
                <TextInput source="content" multiline={true} label="Short description" fullWidth />
                <SelectInput source="status" choices={[
                    {id: "backlog", name: "Backlog"},
                    {id: "toDo", name: "To Do"},
                    {id: "inProgress", name: "In Progress"},
                    {id: "done", name: "Done"},
                ]} validate={[required()]} />
            </SimpleForm>
        </Create>
 )};


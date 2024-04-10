import { Edit, ListButton, SimpleForm, TextInput, SelectInput, required, ShowButton } from 'react-admin';

export const TaskEdit = () => (
    <>
    <ShowButton />
    <Edit>    
        <ListButton label='Go back to the board'/>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="title" validate={required()} />
            <TextInput source="content" multiline={true} label="Short description" fullWidth />
            <SelectInput source="status" choices={[
                {id: "backlog", name: "Backlog"},
                {id: "toDo", name: "To Do"},
                {id: "inProgress", name: "In Progress"},
                {id: "done", name: "Done"},
            ]} validate={[required()]} />
        </SimpleForm>
    </Edit>
    </>
  );
import * as React from 'react';
import {
  Admin,
  Create,
  Edit,
  TextInput,
  Resource,
  EditGuesser,
  ShowGuesser,
  SimpleForm,
  SelectInput,
  required,
  defaultTheme,
  defaultDarkTheme
} from "react-admin";


//import loadable from "@loadable/component";
//import React, { useState, useEffect, useCallback } from "react";

import { dataProvider } from "./dataProvider";
import { TaskList } from "./tasks";

import indigo from '@mui/material/colors/indigo';
import pink from '@mui/material/colors/pink';
import red from '@mui/material/colors/red';

//const TaskList = React.lazy(() => import('./tasks/TaskList'));

const myTheme = {
    ...defaultTheme,
    palette: {
        primary: indigo,
        secondary: pink,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
    },
};

const darkTheme = defaultDarkTheme;

export const TaskCreate = () => (
  <Create>
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
);

export const TaskEdit = () => (
  <Edit>
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
);

// const url = 'https://kanbanbackend-73bc3-default-rtdb.europe-west1.firebasedatabase.app/tasks.json';

// const FetchGetRequest = () => {
  
// };



// export const App = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchDataForPosts = async () => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP error: Status ${response.status}`);
//         }
//         let postsData = await response.json();
//         setData(postsData);
//         setError(null);
//       } catch (err) {
//         setError(err.message);
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDataForPosts();
//   }, []);
  
//   console.log(data);


export const App = () => {
  return (
    <Admin 
    dataProvider={dataProvider}
    theme={myTheme}
    darkTheme={darkTheme}
  >
    <Resource
      name="tasks"
      list={TaskList}
      edit={TaskEdit}
      show={ShowGuesser}
      create={TaskCreate}
    />
  </Admin>
  )
  
};

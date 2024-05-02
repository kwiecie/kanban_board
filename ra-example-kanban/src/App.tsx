import * as React from 'react';
import {
  Admin,
  Create,
  Edit,
  TextInput,
  Resource,
  ListButton,
  ShowGuesser,
  SimpleForm,
  SelectInput,
  required,
  fetchUtils,
  defaultTheme,
  defaultDarkTheme
} from "react-admin";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import loadable from "@loadable/component";
//import React, { useState, useEffect, useCallback } from "react";

import { dataProvider } from "./dataProvider";
import simpleRestProvider from 'ra-data-simple-rest';
import { TaskList } from "./tasks";
import { TaskCreate } from "./tasks/TaskCreate";
import { TaskEdit } from "./tasks/TaskEdit";

import indigo from '@mui/material/colors/indigo';
import pink from '@mui/material/colors/pink';
import red from '@mui/material/colors/red';

//const TaskList = React.lazy(() => import('./tasks/TaskList'));

const firebaseConfig = {
  apiKey: "AIzaSyBb1MTLgM4zdnHm4_dYQBMPfxH7xQDMyxM",
  authDomain: "kanbanboard-a9f6b.firebaseapp.com",
  databaseURL: "https://kanbanboard-a9f6b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kanbanboard-a9f6b",
  storageBucket: "kanbanboard-a9f6b.appspot.com",
  messagingSenderId: "503879762141",
  appId: "1:503879762141:web:ebd53d9492aebb2da09b34",
  measurementId: "G-1QFJMLTTBB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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

const darkTheme = {
  ...defaultDarkTheme,
  typography: {
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
  },
};



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

//onst dataProvider = simpleRestProvider('https://console.firebase.google.com/u/0/project/kanbanboard-a9f6b/database/kanbanboard-a9f6b-default-rtdb/data/~2F');

//let url = 'https://console.firebase.google.com/u/0/project/kanbanboard-a9f6b/database/kanbanboard-a9f6b-default-rtdb/data/~2F';


// const httpClient = (url, options = {}) => {
//     if (!options.headers) {
//         options.headers = new Headers({ Accept: 'application/json' });
//     }
//     // add your own headers here
//     options.headers.set('Content-Range', 'posts 0-24/319');
//     options.headers.set('Access-Control-Expose-Headers', 'Content-Range');
//     return fetchUtils.fetchJson(url, options);
// };

// const dataProvider = simpleRestProvider(url, httpClient);

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

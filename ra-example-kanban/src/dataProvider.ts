import fakeRestDataProvider from "ra-data-fakerest";
import simpleRestDataProvider from 'ra-data-simple-rest';
import { DataProvider } from "react-admin";
import { fetchUtils } from 'ra-core';
import data from "./data.json";
import { Task, statuses } from "./tasks";
import { stringify } from "query-string";

//const baseDataProvider = fakeRestDataProvider(data, true);
import localStorageDataProvider from 'ra-data-local-storage';

// let url = 'https://console.firebase.google.com/u/0/project/kanbanboard-a9f6b/database/kanbanboard-a9f6b-default-rtdb/data/~2F';


// const httpClient = (url, options = {}) => {
//     if (!options.headers) {
//         options.headers = new Headers({ Accept: 'application/json' });
//     }
//     // add your own headers here
//     options.headers.set('Content-Range', 'posts 0-24/319');
//     options.headers.set('Access-Control-Expose-Headers', 'Content-Range');
//     return fetchUtils.fetchJson(url, options);
// };

// const myDataProvider = simpleRestDataProvider(url, httpClient);

const baseDataProvider = localStorageDataProvider({
    defaultData: {
        tasks: [
            {
                "id": 0,
                "title": "Task 1",
                "content": "Lorem ipsum dolor sit amet.",
                "status": "backlog",
                "index": 0
              },
              {
                "id": 1,
                "title": "Task 2",
                "content": "Quisque nisi magna, eleifend et mauris eu, fringilla euismod libero.",
                "status": "toDo",
                "index": 0
              },
              {
                "id": 2,
                "title": "Task 3",
                "content": "Sed id quam sem.",
                "status": "toDo",
                "index": 1
              },
              {
                "id": 3,
                "title": "Task 4",
                "content": "Proin consequat interdum erat, vitae eleifend tortor aliquet eget.",
                "status": "toDo",
                "index": 2
              },
              {
                "id": 4,
                "title": "Task 5",
                "content": "Maecenas interdum gravida orci",
                "status": "backlog",
                "index": 2
              },
              {
                "id": 5,
                "title": "Task 6",
                "content": "Id consectetur lorem molestie a.",
                "status": "done",
                "index": 0
              },
              {
                "id": 6,
                "title": "Task 7",
                "content": "Integer nunc arcu, sollicitudin vel odio at, volutpat scelerisque lorem.",
                "status": "toDo",
                "index": 3
              },
              {
                "id": 7,
                "title": "Task 8",
                "content": "Morbi mollis viverra nisl in aliquam.",
                "status": "done",
                "index": 1
              },
              {
                "id": 8,
                "title": "Task 9",
                "content": "Duis ut interdum quam.",
                "status": "backlog",
                "index": 3
              },
              {
                "id": 9,
                "title": "Task 10",
                "content": "Aenean convallis tempus odio.",
                "status": "toDo",
                "index": 4
              },
              {
                "id": 10,
                "title": "Task 11",
                "content": "Et fringilla nisi tempus at.",
                "status": "inProgress",
                "index": 0
              },
              {
                "id": 11,
                "title": "Task 12",
                "content": "Ut sit amet euismod urna.",
                "status": "inProgress",
                "index": 1
              },
        ],
    }
});

console.log(baseDataProvider);

export interface MyDataProvider extends DataProvider {
   updateTaskStatus: (
     source: Task,
     destination: { 
       status: Task["status"]; 
       index?: number; 
     }
   ) => Promise<void>;
 }

export const dataProvider: MyDataProvider = {
   ...baseDataProvider,
   updateTaskStatus: async (source, destination) => {
  },
};


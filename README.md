# kanban_board

## Overview

Simple Kanban board web application built using TypeScript, ReactAdmin and Material UI.

This web application allows users to manage their tasks using a Kanban board layout, consisting of columns representing different stages of task completion ("Backlog", "To Do", "In Progress", "Done").

## Features

- **Drag-and-Drop**: :computer_mouse: Easily move tasks between columns by dragging and dropping (achieved with [@hello-pangea/dnd](https://github.com/hello-pangea/dnd).
- **Task Management**: :bulb: Add, edit, and delete tasks.
- **Persistence**: :floppy_disk: Tasks are persisted locally, using [ra-data-local-storage](https://www.npmjs.com/package/ra-data-local-storage) allowing users to continue where they left off.


## Installation

Install the application dependencies by running:

```sh
npm install
```

## Development

Start the application in development mode by running:

```sh
npm run dev
```

## Production

Build the application in production mode by running:

```sh
npm run build
```


export * from "./statuses";
export * from "./TaskCard";
export * from "./TaskColumn";
export * from "./TaskList";
export * from "./TaskListContent";

export interface Task {
    id: number,
    title: string,
    content: string,
    status: "backlog" | "toDo" | "inProgress" | "done",
    index: number
}
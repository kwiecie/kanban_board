import { List } from "react-admin";
import { TaskListContent } from "./TaskListContent";

export const TaskList = () => {
    return (
        <List
            perPage={100}
            sort={{ field: "index", order: "ASC" }}
            pagination={false}
            component="div"
            >
            <TaskListContent />
        </List>
    );
};
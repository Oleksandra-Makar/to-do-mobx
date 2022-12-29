import { List } from "@mui/material";
import ToDoItem from "./ToDoItem";
import { observer } from "mobx-react-lite";
import store from "../store/todoStore";

const ToDoList = observer(() => {
  const { todos } = store;

  return (
    <List>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </List>
  );
});

export default ToDoList;

import { List } from "@mui/material";
import ToDoItem from "./ToDoItem";
import { IToDo } from "../interfaces/Todo";
import { FC } from "react";
import { observer } from "mobx-react-lite";

interface IToDoList {
  todos: IToDo[];
}

const ToDoList: FC<IToDoList> = observer(({ todos }) => {
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

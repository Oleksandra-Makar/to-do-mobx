import { List } from "@mui/material";
import ToDoItem from "./ToDoItem";
import { IToDo } from "../interfaces/Todo";
import { FC } from "react";
import { observer } from "mobx-react-lite";
import store from "../store/todoStore";

interface IToDoList {
  todos?: IToDo[];
}

const ToDoList: FC<IToDoList> = observer(() => {
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

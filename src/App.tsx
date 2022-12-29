import React, { FC } from "react";
import { Container, Typography } from "@mui/material";
import AddToDo from "./components/AddToDo";
import CompletedToDosCounter from "./components/CompletedToDosCounter";
import ToDoList from "./components/ToDoList";
import { Store } from "./store/todoStore";
import { observer } from "mobx-react-lite";

interface IAppProps {
  store: Store;
}

const App: FC<IAppProps> = observer(({ store }) => {
  const { todos, completedTodoCount } = store;
  const addTodo = (title: string) => store.addTodo(title);
  return (
    <Container maxWidth="xs">
      <Typography style={{ textAlign: "center" }} variant="h3">
        Redux List App
      </Typography>
      <AddToDo addTodo={addTodo} />
      <ToDoList todos={todos} />
      <CompletedToDosCounter completedTodos={completedTodoCount} />
    </Container>
  );
});

export default App;

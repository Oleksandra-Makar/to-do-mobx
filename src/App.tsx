import { Container, Typography } from "@mui/material";
import AddToDo from "./components/AddToDo";
import CompletedToDosCounter from "./components/CompletedToDosCounter";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <Container maxWidth="xs">
      <Typography style={{ textAlign: "center" }} variant="h3">
        Redux List App
      </Typography>
      <AddToDo />
      <ToDoList />
      <CompletedToDosCounter />
    </Container>
  );
};

export default App;

import { FC, useCallback } from "react";
import { IToDo } from "../interfaces/Todo";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import store from "../store/todoStore";

interface IToDoItemProps extends IToDo {}

const ToDoItem: FC<IToDoItemProps> = ({ id, completed, title }) => {
  const handleChangeStatus = useCallback(() => {
    store.toggleTodoStatus({ completed: !completed, id });
  }, [completed, id]);

  const handleDelete = useCallback(() => {
    store.deleteTodo(id);
  }, [id]);

  return (
    <ListItem key={id}>
      <ListItemText
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {title}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
        <Checkbox
          edge="start"
          value={completed}
          onChange={handleChangeStatus}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ToDoItem;

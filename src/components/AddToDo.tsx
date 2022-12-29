import { FC, useCallback, useState } from "react";
import { Button, TextField } from "@mui/material";
import store from "../store/todoStore";

interface IAddToDo {
  addTodo?: (title: string) => void;
}

const AddToDo: FC<IAddToDo> = () => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = useCallback(
    (event: any) => {
      event.preventDefault();
      if (title) {
        store.addTodo(title);
        setTitle("");
      }
    },
    [title]
  );
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        label="To Do Item"
        fullWidth
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        margin="normal"
      />
      <Button variant="contained" color="primary" fullWidth type="submit">
        Add Item
      </Button>
    </form>
  );
};

export default AddToDo;

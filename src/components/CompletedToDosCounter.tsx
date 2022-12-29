import { Typography } from "@mui/material";
import { FC } from "react";
import todoStore from "../store/todoStore";
import { observer } from "mobx-react-lite";

interface ICompletedToDosCounterProps {
  completedTodos?: number;
}

const CompletedToDosCounter: FC<ICompletedToDosCounterProps> = observer(() => {
  const { completedTodoCount } = todoStore;

  return (
    <Typography style={{ textAlign: "center" }} variant="h4">
      Total completed to-dos: {completedTodoCount}
    </Typography>
  );
});

export default CompletedToDosCounter;

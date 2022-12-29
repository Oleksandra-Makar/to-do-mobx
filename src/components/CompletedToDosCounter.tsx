import { Typography } from "@mui/material";
import { FC } from "react";

interface ICompletedToDosCounterProps {
  completedTodos: number;
}

const CompletedToDosCounter: FC<ICompletedToDosCounterProps> = ({
  completedTodos,
}) => {
  return (
    <Typography style={{ textAlign: "center" }} variant="h4">
      Total completed to-dos: {completedTodos}
    </Typography>
  );
};

export default CompletedToDosCounter;

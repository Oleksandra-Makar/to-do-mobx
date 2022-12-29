import { Typography } from "@mui/material";
import todoStore from "../store/todoStore";
import { observer } from "mobx-react-lite";

const CompletedToDosCounter = observer(() => {
  const { completedTodoCount } = todoStore;

  return (
    <Typography style={{ textAlign: "center" }} variant="h4">
      Total completed to-dos: {completedTodoCount}
    </Typography>
  );
});

export default CompletedToDosCounter;

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import * as dayjs from "dayjs";
import { TaskItem } from "../TaskItem/TaskItem";
import "./TaskWrapper.css";
import { v4 as uuidv4 } from "uuid";
import { ITaskData, ITaskItem } from "../../../../Common/Models/Busines";
import { useHandleChangeAppUi } from "../../../../Common/Context/AppUIContext";
import { useToggleTasks } from "../../../../Common/Context/TasksContext";

export interface ITaskWrapperProps {
  data: ITaskData;
}

export const TaskWrapper: React.FC<ITaskWrapperProps> = ({
  data: { date, tasks },
}): JSX.Element => {
  const { appUiOptions, handleChangeAppUi } = useHandleChangeAppUi();
  const { updateTaskDataCtx } = useToggleTasks();

  //@ts-ignore
  const isSameDate = dayjs(date).isToday();

  const handleOpenModal = () => {
    handleChangeAppUi({ ...appUiOptions, isModalOpen: true });
    const { id: taskId, ...rest } = tasks[0];
    updateTaskDataCtx({ id: "", ...rest });
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <Accordion>
        {!isSameDate && (
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Box ml={4}>
              <Typography>Task date title {date}</Typography>
            </Box>
          </AccordionSummary>
        )}

        <AccordionDetails
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: isSameDate === 1 ? "26px" : "8px",
          }}
        >
          <Box>
            {tasks.map((item: ITaskItem) => (
              <TaskItem taskData={item} key={uuidv4()} />
            ))}
          </Box>

          <Box alignSelf={"flex-end"}>
            <Button variant="contained" onClick={() => handleOpenModal()}>
              Add task
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

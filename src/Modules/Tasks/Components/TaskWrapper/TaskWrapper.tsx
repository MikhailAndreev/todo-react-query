import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { TaskItem } from "../TaskItem/TaskItem";
import "./TaskWrapper.css";
import { v4 as uuidv4 } from "uuid";
import { ITaskData, ITaskItem } from "../../../../Common/Models/Busines";
import { useHandleChangeAppUi } from "../../../../Common/Context/AppUIContext";
import { useToggleTasks } from "../../../../Common/Context/TasksContext";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";

dayjs.extend(isToday);
dayjs.extend(isTomorrow);

export interface ITaskWrapperProps {
  data: ITaskData;
  key: string;
}

export const TaskWrapper: React.FC<ITaskWrapperProps> = ({
  data: { date, tasks },
}): JSX.Element => {
  const { appUiOptions, handleChangeAppUi } = useHandleChangeAppUi();
  const { updateTaskDataCtx } = useToggleTasks();

  const isSameDate = dayjs(date).isToday();
  const isDateTomorrow = dayjs(date).isTomorrow();
  const formattedDate = dayjs(date).format("DD/MM");
  console.log("isDateTomorrow", isDateTomorrow, date);

  const handleOpenModal = () => {
    handleChangeAppUi({ ...appUiOptions, isModalOpen: true });
    const { id: taskId, ...rest } = tasks[0];
    updateTaskDataCtx({ id: "", ...rest });
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <Accordion>
        {!isSameDate && (
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            expandIcon={<ExpandMoreIcon style={{ color: "#FFF" }} />}
          >
            <Box ml={4}>
              <Typography>
                {isDateTomorrow ? "Tomorrow" : formattedDate} tasks
              </Typography>
            </Box>
          </AccordionSummary>
        )}

        <AccordionDetails
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: isSameDate ? "26px" : "8px",
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

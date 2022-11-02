import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { ITaskItem } from "../../../../Common/Models/Busines";
import { useDeleteTask } from "../../Api/mutations";
import SwitchButton from "../../../../Components/SwitchButton/SwitchButton";
import "./TaskItem.css";
import { useToggleTasks } from "../../../../Common/Context/TasksContext";
import { useHandleChangeAppUi } from "../../../../Common/Context/AppUIContext";

export interface ITaskItemProps {
  taskData: ITaskItem;
  key: string;
}

export const TaskItem: React.FC<ITaskItemProps> = ({
  taskData: { id, title, description, color, isFinished },
  taskData,
  key,
}): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const { appUiOptions, handleChangeAppUi } = useHandleChangeAppUi();
  const { updateTaskDataCtx } = useToggleTasks();

  const deleteTask = useDeleteTask();

  const handleDeleteTask = () => {
    deleteTask.mutateAsync(id);
  };

  const handleChange = () => {
    setExpanded((isExpanded) => !isExpanded);
  };

  const handleEditTask = () => {
    handleChangeAppUi({ ...appUiOptions, isModalOpen: true });
    updateTaskDataCtx(taskData);
  };

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={() => handleChange()}
        style={{ boxShadow: "none" }}
        key={key}
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Box display={"flex"}>
            <Box>
              <div className="task-label"></div>
            </Box>
            <Box>
              <Typography style={{ lineHeight: expanded ? "30px" : "20px" }}>
                {title}
              </Typography>

              {!expanded && (
                <Box>
                  <Typography
                    style={{
                      lineHeight: "10px",
                      fontSize: 12,
                      color: "rgba(255, 255, 255, 0.6)",
                    }}
                  >
                    Short description
                  </Typography>
                </Box>
              )}
            </Box>

            <Box alignSelf={"flex-end"}>
              <SwitchButton />
            </Box>
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <Box display="flex" flexDirection="column" pl={3} pr={3}>
            <Box>
              <Typography>{description}</Typography>
            </Box>

            <Box alignSelf="flex-end">
              <Button
                variant="contained"
                style={{ marginRight: 10 }}
                onClick={() => handleEditTask()}
              >
                Edit
              </Button>

              <Button variant="contained" onClick={() => handleDeleteTask()}>
                Delete
              </Button>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

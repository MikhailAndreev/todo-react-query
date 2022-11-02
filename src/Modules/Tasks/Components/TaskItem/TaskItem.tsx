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
import { useDeleteTask, useUpdateTask } from "../../Api/mutations";
import SwitchButton from "../../../../Components/SwitchButton/SwitchButton";
import "./TaskItem.css";
import { useToggleTasks } from "../../../../Common/Context/TasksContext";
import { useHandleChangeAppUi } from "../../../../Common/Context/AppUIContext";
import { isLoading } from "../../../../Common/Utils/ReactQueryUtils";

export interface ITaskItemProps {
  taskData: ITaskItem;
}

export const TaskItem: React.FC<ITaskItemProps> = ({
  taskData: { id, title, description, isFinished },
  taskData,
}): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const { appUiOptions, handleChangeAppUi } = useHandleChangeAppUi();
  const { updateTaskDataCtx } = useToggleTasks();

  const deleteTask = useDeleteTask();
  const updateTask = useUpdateTask();
  const isLoadingData = isLoading([updateTask.status]);

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

  const handleFinishTask = (val: boolean) => {
    const updData = { ...taskData, isFinished: val };

    updateTask.mutate(updData);
    updateTaskDataCtx(updData);
  };

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={() => handleChange()}
        style={{ boxShadow: "none" }}
      >
        <AccordionSummary style={{ width: "100%", padding: 0 }}>
          <Box display={"flex"} width="100%">
            <Box display={"flex"} flex="1 0 auto">
              <Box>
                <div className="task-label"></div>
              </Box>
              <Box>
                <Typography
                  style={{
                    lineHeight: expanded ? "30px" : "20px",
                    textDecoration: isFinished ? "line-through" : "none",
                  }}
                >
                  {title}
                </Typography>

                {!expanded && (
                  <Box className="task-item__short-description">
                    {description}
                  </Box>
                )}
              </Box>
            </Box>

            <Box>
              <SwitchButton
                isChecked={isFinished}
                hadleCallback={handleFinishTask}
                disabled={isLoadingData}
              />
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

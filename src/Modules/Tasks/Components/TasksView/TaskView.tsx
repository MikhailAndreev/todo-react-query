import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { ReactComponent as CheckIcon } from "../../../../Assets/Icons/checkIcon.svg";
import { useInitData } from "../../Hooks/useInitData";
import { isError, isLoading } from "../../../../Common/Utils/ReactQueryUtils";
import { transformTasksDto } from "../../Utils/transformTasks";
import CustomPopover from "../../../../Components/CustomPopover/CustomPopover";
import { ITaskData } from "../../../../Common/Models/Busines";
import { TaskWrapper } from "../TaskWrapper/TaskWrapper";
import "./TaskView.css";

export const TaskView = (): JSX.Element => {
  const { tasksData, tasksDataStatus } = useInitData();

  const isErrorData = isError([tasksDataStatus]);
  const isLoadingData = isLoading([tasksDataStatus]);

  let transformedData = [];
  if (tasksData?.data) {
    transformedData = transformTasksDto(tasksData?.data);
  }

  return (
    <div className="task-view__container">
      {isErrorData && <span>При загрузке произошла ошибка</span>}
      {isLoadingData && <CircularProgress />}

      <Card
        sx={{
          width: "100%",
          maxWidth: 800,
          backgroundColor: "#282828",
          borderRadius: "15px",
        }}
      >
        <CardContent>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 36,
                lineHeight: "43px",
                color: "#F4F4F4",
              }}
              color="text.secondary"
              gutterBottom
            >
              TODO
            </Typography>

            <CustomPopover />
          </Box>

          <Box
            display={"flex"}
            justifyContent={"start"}
            alignItems={"center"}
            mb={2}
          >
            <CheckIcon style={{ marginRight: 10 }} />

            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 24,
                lineHeight: "28px",
                color: "#F4F4F4",
                margin: 0,
              }}
              color="text.secondary"
              gutterBottom
            >
              Today Tasks:
            </Typography>
          </Box>

          <Box>
            {isLoadingData ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            ) : transformedData?.length ? (
              transformedData?.map((item: ITaskData) => (
                <TaskWrapper data={item} />
              ))
            ) : (
              <div>Empty task list</div>
            )}
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

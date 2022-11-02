import { isError, isLoading, isSuccess } from "../Common/Utils/ReactQueryUtils";
import { useEffect } from "react";
import { useInitData } from "../Modules/Tasks/Hooks/useInitData";
import { ITaskData } from "../Common/Models/Busines";
import {
  Card,
  CardContent,
  CircularProgress,
  Modal,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { ReactComponent as CheckIcon } from "../Assets/Icons/checkIcon.svg";
import { transformTasksDto } from "../Common/Utils/transformTasks";
import Ticker from "../Components/Ticker/Ticker";
import { TodoForm } from "../Modules/Tasks/Components/TodoForm/TodoForm";
import { TaskWrapper } from "../Modules/Tasks/Components/TaskWrapper/TaskWrapper";
import { useInitNewsData } from "../Modules/News/Hooks/useInitData";
import CustomPopover from "../Components/CustomPopover/CustomPopover";
import { useHandleChangeAppUi } from "../Common/Context/AppUIContext";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const MainPage = (): JSX.Element => {
  const {
    appUiOptions: { isModalOpen },
    appUiOptions,
    handleChangeAppUi,
  } = useHandleChangeAppUi();
  const { tasksData, tasksDataStatus } = useInitData();
  const { newsData, newsDataStatus } = useInitNewsData();

  const isErrorData = isError([tasksDataStatus]);
  const isLoadingData = isLoading([tasksDataStatus]);
  const isSuccessData = isSuccess([tasksDataStatus]);

  useEffect(() => {
    // console.log("newsData", newsData);
  }, [newsData]);

  const handleModal = () => {
    handleChangeAppUi({ ...appUiOptions, isModalOpen: false });
  };

  let transformedData = [];
  if (tasksData?.data) {
    transformedData = transformTasksDto(tasksData?.data);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <div style={{ marginBottom: 50 }}>Content for TODO LIST</div>
      {isErrorData && <span>При загрузке произошла ошибка</span>}
      {isLoadingData && <span>Загрузка...</span>}*/}

      <Modal
        open={isModalOpen}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TodoForm />
        </Box>
      </Modal>

      <div style={{ marginBottom: 20 }}></div>

      {/* <Button onClick={() => handleCreateTask()} variant="contained">
        Send
      </Button> */}

      <div style={{ marginBottom: 10 }}></div>

      <div style={{ marginBottom: 200 }}></div>

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

            <CustomPopover handlePoppoverChange={() => {}} />
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

      <div style={{ marginBottom: 200 }}></div>
      <Ticker newsDescription={newsData?.data?.articles[0]?.description} />
      <div style={{ marginBottom: 200 }}></div>
    </div>
  );
};

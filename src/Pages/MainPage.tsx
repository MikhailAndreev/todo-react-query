import { CircularProgress } from "@mui/material";

import Ticker from "../Components/Ticker/Ticker";
import { TodoForm } from "../Modules/Tasks/Components/TodoForm/TodoForm";
import { useInitNewsData } from "../Modules/News/Hooks/useInitData";
import { TaskView } from "../Modules/Tasks/Components/TasksView/TaskView";
import { CustomModal } from "../Components/CustomModal/CustomModal";
import { isError, isLoading } from "../Common/Utils/ReactQueryUtils";

export const MainPage = (): JSX.Element => {
  const { newsData, newsDataStatus } = useInitNewsData();

  const isErrorData = isError([newsDataStatus]);
  const isLoadingData = isLoading([newsDataStatus]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TaskView />

      {isErrorData && <span>При загрузке произошла ошибка</span>}
      {isLoadingData && <CircularProgress />}

      <Ticker newsDescription={newsData?.data?.articles[0]?.description} />

      <CustomModal>
        <TodoForm />
      </CustomModal>
    </div>
  );
};

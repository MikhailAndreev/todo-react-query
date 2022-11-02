import React, { createContext, useState, useContext } from "react";
import noop from "lodash/noop";
import { ITaskItem } from "../Models/Busines";

const TasksContext = createContext({
  taskDataCtx: {
    id: "",
    title: "",
    description: "",
    isFinished: false,
    startDate: "",
  },
  setTaskData: noop,
});

const TasksContextProvider = ({ children }: any) => {
  const [taskDataCtx, setTaskData] = useState<ITaskItem>({
    id: "",
    title: "",
    description: "",
    isFinished: false,
    startDate: "",
  });
  const value = React.useMemo(
    () => ({
      taskDataCtx,
      setTaskData,
    }),
    [taskDataCtx]
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

const useToggleTasks = (): {
  taskDataCtx: ITaskItem;
  updateTaskDataCtx: (data: ITaskItem) => void;
} => {
  const context = useContext(TasksContext);
  if (!context) {
    throw Error("useToggle must be used within a TasksContextProvider");
  }

  const { taskDataCtx, setTaskData } = context;

  const updateTaskDataCtx = (data: ITaskItem) => {
    setTaskData(data);
  };

  return { taskDataCtx, updateTaskDataCtx };
};

export { TasksContextProvider, useToggleTasks };

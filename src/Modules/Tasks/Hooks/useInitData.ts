import { useTaksData, useTaksItemByid } from "../Api/queries";

export const useInitData = () => {
  const { data: tasksData, status: tasksDataStatus } = useTaksData();

  return {
    tasksData,
    tasksDataStatus,
  };
};

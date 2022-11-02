import { useTaksItemByid } from "../Api/queries";

export const useTaskById = (id: string) => {
  const { data: taskItemData, status: taskItemDataStatus } =
    useTaksItemByid(id);

  return {
    taskItemData,
    taskItemDataStatus,
  };
};

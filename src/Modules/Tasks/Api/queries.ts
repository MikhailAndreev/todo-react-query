import { useQuery } from "@tanstack/react-query";
import { TaskService } from "../../../Services/TaskService";
import { ETasksQueryKeys } from "../Actions";

export const useTaksData = () =>
  useQuery([ETasksQueryKeys.SET_TASKS_DATA], () => TaskService.getAll(), {
    onError: () => {
      alert(`Error fetch ${ETasksQueryKeys.SET_TASKS_DATA}`);
    },
    keepPreviousData: true,
  });

export const useTaksItemByid = (taskId: string) =>
  useQuery(
    [ETasksQueryKeys.SET_TASKS_DATA_ITEM, taskId],
    () => TaskService.getById(taskId),
    {
      onError: () => {
        alert(`Error fetch ${ETasksQueryKeys.SET_TASKS_DATA_ITEM}`);
      },
      keepPreviousData: true,
      enabled: !!taskId,
    }
  );

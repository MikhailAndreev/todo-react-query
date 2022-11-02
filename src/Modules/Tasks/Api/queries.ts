import { useQuery } from "@tanstack/react-query";
import { transformTasksDto } from "../../../Common/Utils/transformTasks";
import { TaskService } from "../../../Services/TaskService";
import { ETasksQueryKeys } from "../Actions";

export const useTaksData = () =>
  useQuery([ETasksQueryKeys.SET_TASKS_DATA], () => TaskService.getAll(), {
    onSuccess: (data) => {
      if (data) {
        // console.log("Success", data);
      }
    },
    onError: (data) => {
      if (data) {
        // console.log("ERROR", data);
      }
    },
    keepPreviousData: true,
    enabled: true,
  });

export const useTaksItemByid = (taskId: string) =>
  useQuery(
    [ETasksQueryKeys.SET_TASKS_DATA_ITEM, taskId],
    () => TaskService.getById(taskId),
    {
      onSuccess: (data) => {
        if (data) {
          console.log("Success", data);
        }
      },
      onError: (data) => {
        if (data) {
          // console.log("ERROR", data);
        }
      },
      keepPreviousData: true,
      enabled: true,
    }
  );

import { QueryClient, useMutation } from "@tanstack/react-query";
import { ITaskData, ITaskItem } from "../../../Common/Models/Busines";
import { queryClient } from "../../../Common/ReactQuery";
import { TaskService } from "../../../Services/TaskService";
import { ETasksQueryKeys } from "../Actions";

export const useCreateTask = () =>
  useMutation(
    [ETasksQueryKeys.CREATE_TASK_ITEM],
    (data: ITaskItem) => TaskService.create(data),
    {
      onSuccess: (data) => {
        if (data) {
          console.log("Create succesful", data);
        }
      },
      onError: (data) => {
        if (data) {
          console.log("ERROR", data);
        }
      },
      onSettled(...params) {
        queryClient.invalidateQueries([ETasksQueryKeys.SET_TASKS_DATA]);
      },
    }
  );

export const useDeleteTask = () =>
  useMutation(
    [ETasksQueryKeys.DELETE_TASK_ITEM],
    (id: string) => TaskService.delete(id),
    {
      onSuccess: (data) => {
        if (data) {
          console.log("delete succesful", data);
        }
      },
      onError: (data) => {
        if (data) {
          console.log("ERROR", data);
        }
      },
      onSettled(...params) {
        queryClient.invalidateQueries([ETasksQueryKeys.SET_TASKS_DATA]);
      },
    }
  );

export const useUpdateTask = () =>
  useMutation(
    [ETasksQueryKeys.UPDATE_TASK_ITEM],
    (data: ITaskItem) => TaskService.update(data),
    {
      onSuccess: (data) => {
        if (data) {
          console.log("delete succesful", data);
        }
      },
      onError: (data) => {
        if (data) {
          console.log("ERROR", data);
        }
      },
      onSettled(...params) {
        queryClient.invalidateQueries([ETasksQueryKeys.SET_TASKS_DATA]);
      },
    }
  );

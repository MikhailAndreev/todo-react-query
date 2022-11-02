import { useMutation } from "@tanstack/react-query";
import { ITaskItem } from "../../../Common/Models/Busines";
import { queryClient } from "../../../Common/ReactQuery";
import { TaskService } from "../../../Services/TaskService";
import { ETasksQueryKeys } from "../Actions";

export const useCreateTask = () =>
  useMutation(
    [ETasksQueryKeys.CREATE_TASK_ITEM],
    (data: ITaskItem) => TaskService.create(data),
    {
      onError: () => {
        alert(`Error fetch ${ETasksQueryKeys.CREATE_TASK_ITEM}`);
      },
      onSettled() {
        queryClient.invalidateQueries([ETasksQueryKeys.SET_TASKS_DATA]);
      },
    }
  );

export const useDeleteTask = () =>
  useMutation(
    [ETasksQueryKeys.DELETE_TASK_ITEM],
    (id: string) => TaskService.delete(id),
    {
      onError: () => {
        alert(`Error fetch ${ETasksQueryKeys.DELETE_TASK_ITEM}`);
      },
      onSettled() {
        queryClient.invalidateQueries([ETasksQueryKeys.SET_TASKS_DATA]);
      },
    }
  );

export const useUpdateTask = () =>
  useMutation(
    [ETasksQueryKeys.UPDATE_TASK_ITEM],
    (data: ITaskItem) => TaskService.update(data),
    {
      onError: () => {
        alert(`Error fetch ${ETasksQueryKeys.UPDATE_TASK_ITEM}`);
      },
      onSettled() {
        queryClient.invalidateQueries([ETasksQueryKeys.SET_TASKS_DATA]);
      },
    }
  );

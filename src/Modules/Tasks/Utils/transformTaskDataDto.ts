import { ITaskItem } from "../../../Common/Models/Busines";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export const transformTaskDataDto = (
  data: any,
  taskCtx: ITaskItem
): ITaskItem => {
  const startDate = taskCtx?.startDate || dayjs().format("MM-DD-YYYY");
  const id = taskCtx?.id || uuidv4();
  return {
    id,
    title: data?.title,
    description: data?.description,
    startDate,
    isFinished: false,
  };
};

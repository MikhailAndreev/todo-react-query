import dayjs from "dayjs";
import { ITaskData } from "../Models/Busines";

export const sortByDate = (dateList: ITaskData[]): any => {
  const updList = dateList.sort((a: ITaskData, b: ITaskData) => {
    if (dayjs(a.date).isBefore(dayjs(b.date))) {
      return -1;
    } else {
      return 0;
    }
  });

  return updList;
};

export const findTodayInTasks = (dateList: ITaskData[]) => {
  const sortedList = sortByDate(dateList);
  const today = dayjs().format("MM-DD-YYYY");
  const todayIndex = sortedList.findIndex((item: any) => item.date === today);

  const updatedList = sortedList.slice(todayIndex);

  return updatedList;
};

import { findTodayInTasks } from "../../../Common/Utils/dateUtils";

export const transformTasksDto = (data: any) => {
  const transformedArr = data.reduce((acc: any, task: any) => {
    const currObj = acc.find((item: any) => item.date === task.startDate);
    if (currObj) {
      currObj.tasks.push(task);
    } else {
      acc.push({ date: task?.startDate, tasks: [task] });
    }
    return acc;
  }, []);

  const tasksStartingToday = findTodayInTasks(transformedArr);

  return tasksStartingToday;
};

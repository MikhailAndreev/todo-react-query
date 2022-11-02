export interface ITaskItem {
  id: string;
  title: string;
  color: string;
  description: string;
  isFinished: boolean;
  startDate: string;
}

export interface ITaskData {
  date: string;
  tasks: ITaskItem[];
}

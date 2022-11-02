export interface ITaskItem {
  id: string;
  title: string;
  description: string;
  isFinished: boolean;
  startDate: string;
}

export interface ITaskData {
  date: string;
  tasks: ITaskItem[];
}

export interface INewsData {
  articles: INewsArticleData[];
  status: string;
  tatalResults: number;
}

export interface INewsArticleData {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: string;
  title: string;
  url: string;
  urlToImage: string;
}

import axios from "axios";
import { ITaskItem } from "../Common/Models/Busines";
import { API_URL } from "../Consts/consts";

axios.defaults.baseURL = API_URL;

export class TaskService {
  public static async getAll() {
    return await axios.get<ITaskItem[]>("/tasks");
  }
  public static async getById(id: string) {
    return await axios.get<ITaskItem>(`/tasks/${id}`);
  }
  public static async create(data: ITaskItem) {
    return await axios.post(`/tasks`, data, {
      headers: { "Conent-Type": "application/json" },
    });
  }
  public static async update(data: ITaskItem) {
    return await axios.patch(`/tasks/${data.id}`, data, {
      headers: { "Conent-Type": "application/json" },
    });
  }
  public static async delete(id: string) {
    return await axios.delete(`/tasks/${id}`);
  }
}

import axios from "axios";
import { INewsData } from "../Common/Models/Busines";

export class NewsService {
  public static async getNews() {
    return await axios.get<INewsData>(
      `https://newsapi.org/v2/everything?q=Apple&from=2022-11-01&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
    );
  }
}

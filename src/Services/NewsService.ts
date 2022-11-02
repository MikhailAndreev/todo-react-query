import axios from "axios";

// export interface INewsData {

// }

export class NewsService {
  public static async getNews() {
    return await axios.get<any>(
      `https://newsapi.org/v2/everything?q=Apple&from=2022-11-01&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`
    );
  }
}

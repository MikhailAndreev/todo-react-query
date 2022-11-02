import { useQuery } from "@tanstack/react-query";
import { NewsService } from "../../../Services/NewsService";
import { ENewsQueryKeys } from "../Actions";

export const useNewsData = () =>
  useQuery([ENewsQueryKeys.SET_NEWS_DATA], () => NewsService.getNews(), {
    onSuccess: (data) => {
      if (data) {
        // console.log("Success", data);
      }
    },
    onError: (data) => {
      if (data) {
        // console.log("ERROR", data);
      }
    },
    keepPreviousData: true,
    enabled: true,
  });

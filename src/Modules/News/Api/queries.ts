import { useQuery } from "@tanstack/react-query";
import { NewsService } from "../../../Services/NewsService";
import { ENewsQueryKeys } from "../Actions";

export const useNewsData = () =>
  useQuery([ENewsQueryKeys.SET_NEWS_DATA], () => NewsService.getNews(), {
    onError: () => {
      alert(`Error fetch ${ENewsQueryKeys.SET_NEWS_DATA}`);
    },
    keepPreviousData: true,
  });

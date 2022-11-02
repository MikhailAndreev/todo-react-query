import { useNewsData } from "../Api/queries";

export const useInitNewsData = () => {
  const { data: newsData, status: newsDataStatus } = useNewsData();
  return {
    newsData,
    newsDataStatus,
  };
};

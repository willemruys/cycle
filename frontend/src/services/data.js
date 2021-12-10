import useSwr from "swr";
import { axiosInstance } from "../utils/api";

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

const useCycleData = () => {
  const { data, error } = useSwr("/cycle-data", fetcher);

  return {
    isLoading: !error && !data,
    isError: error,
    data,
  };
};

const useMapData = () => {
  const { data, error } = useSwr("/map", fetcher);
  return {
    isLoading: !error && !data,
    isError: error,
    geoJson: data,
  };
};

export { useCycleData, useMapData };

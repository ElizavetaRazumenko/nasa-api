import { API_KEY } from "@/constants/constants";
import getConvertDateInfo from "./getConvertDateInfo";

const basicEndpoint = 'https://api.nasa.gov/planetary/apod';

const setEndpoint = (date: string | null) => {
  const convertDateInfo = getConvertDateInfo(date);

  return convertDateInfo.start_date 
  ? `${basicEndpoint}?start_date=${convertDateInfo.start_date}&end_date=${convertDateInfo.end_date}&api_key=${API_KEY}` 
  : `${basicEndpoint}?date=${convertDateInfo.date}&api_key=${API_KEY}`
}

export default setEndpoint;

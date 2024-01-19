import { API_KEY } from "@/constants/constants";
import getConvertDateInfo from "./getConvertDateInfo";

const basicURL = 'https://api.nasa.gov/planetary/apod';

const getEndpoint = (date: string | null): string => {
  const convertDateInfo = getConvertDateInfo(date);

  return convertDateInfo.start_date 
  ? `${basicURL}?start_date=${convertDateInfo.start_date}&end_date=${convertDateInfo.end_date}&api_key=${API_KEY}` 
  : `${basicURL}?date=${convertDateInfo.date}&api_key=${API_KEY}`
}

export default getEndpoint;

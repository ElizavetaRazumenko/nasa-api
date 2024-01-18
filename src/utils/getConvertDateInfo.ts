import { DATE_RANGE_NUMBER } from "@/constants/constants";
import getCurrentDate from "./getCurrentDate";

export interface DateInfo {
  date: string;
  start_date: string | null;
  end_date: string;
}

const getConvertDateInfo = (date: string | null) => {
  const defaultDateInfo: DateInfo = {
    date: getCurrentDate(),
    start_date: null,
    end_date: getCurrentDate(),
  }

  if (date) {
    const dateArr = date.split(' ').filter((date) => date !== "-");
    if (dateArr.length === DATE_RANGE_NUMBER) {
      defaultDateInfo.start_date = dateArr[0];
      defaultDateInfo.end_date = dateArr[1];
    } else {
      defaultDateInfo.date = dateArr[0];
    }
  }

  return defaultDateInfo;
}

export default getConvertDateInfo;
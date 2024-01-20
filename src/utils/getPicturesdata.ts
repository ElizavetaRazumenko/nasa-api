import { API_KEY, BASIC_URL } from "@/constants/constants";
import generateID from "./generateID";
import { HomeProps } from "@/pages";

type ResponseDataKeys =
  | "copyright"
  | "date"
  | "explanation"
  | "hdurl"
  | "media_type"
  | "service_version"
  | "title"
  | "url";

 
interface Params {
  date: string | string[] | undefined;
  start_date: string | string[] | undefined;
  end_date: string | string[] | undefined;
}

const getPicturesData = async ({date, start_date, end_date}: Params): Promise<HomeProps> => {
  let endpoint = "";
  let picturesData = null;
  let errorMessage = null;
  if (
    typeof date === "string" ||
    (typeof start_date === "string" && typeof end_date === "string")
  ) {
    endpoint = date
      ? `${BASIC_URL}?date=${date}&api_key=${API_KEY}`
      : `${BASIC_URL}?start_date=${start_date}&end_date=${end_date}&api_key=${API_KEY}`;

    try {
      const response = await fetch(endpoint);
      const responseData = (await response.json()) as
        | Record<ResponseDataKeys, string>
        | Record<ResponseDataKeys, string>[];

      if (Array.isArray(responseData)) {
        picturesData = [
          ...responseData.map((data) => ({
            id: generateID(),
            date: data.date,
            url: data.url,
          })),
        ];
      } else {
        picturesData = [
          {
            id: generateID(),
            date: responseData.date,
            url: responseData.url,
          },
        ];
      }
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message;
      }
    }
  }

  return {
      picturesData,
      errorMessage
  };
}

export default getPicturesData;
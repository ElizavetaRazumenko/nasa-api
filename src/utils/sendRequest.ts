import { API_KEY } from "@/constants/apiConstants";

const endpoint = 'https://api.nasa.gov/planetary/apod?api_key=';

type ResponseDataKeys = 'copyright' | 'date' | 'explanation' | 'hdurl' | 'media_type' | 'service_version' | 'title' | 'url';

const getPictureUrl = async (): Promise<string | null> => {
  try {
    const response = await fetch(`${endpoint}${API_KEY}`);
    const responseData = await response.json() as Record<ResponseDataKeys, string>;
    
    if (responseData) {
      return responseData.url;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return null;
}

export default getPictureUrl;
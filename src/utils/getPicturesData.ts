type ResponseDataKeys = 'copyright' | 'date' | 'explanation' | 'hdurl' | 'media_type' | 'service_version' | 'title' | 'url';

export interface PicturesData {
  id: string;
  date: string; 
  url: string;
}
const getPicturesData = async (endpoint: string): Promise<PicturesData[] | null> => {
  try {
    const response = await fetch(endpoint);
    const responseData = await response.json() as (Record<ResponseDataKeys, string> | Record<ResponseDataKeys, string>[])

    if (Array.isArray(responseData)) {
      return responseData.map((data) => ({ 
        id: window.crypto.randomUUID(), 
        date: data.date, 
        url: data.url}))
    }  

    return [{
      id: window.crypto.randomUUID(),
      date: responseData.date, 
      url: responseData.url
    }]
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return null;
}

export default getPicturesData;
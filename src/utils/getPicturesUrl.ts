type ResponseDataKeys = 'copyright' | 'date' | 'explanation' | 'hdurl' | 'media_type' | 'service_version' | 'title' | 'url';

const getPicturesUrl = async (endpoint: string): Promise<string[] | null> => {
  try {
    const response = await fetch(endpoint);
    const responseData = await response.json() as (Record<ResponseDataKeys, string> | Record<ResponseDataKeys, string>[])

    if (Array.isArray(responseData)) {
      return responseData.map((data) => data.url)
    }  

    return [responseData.url]
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return null;
}

export default getPicturesUrl;
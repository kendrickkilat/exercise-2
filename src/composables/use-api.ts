import fetchAPIService from '@/services/fetch-api-service';

export default function useApi() {
  const { sendRequest } = fetchAPIService();

  async function get(request: Request):Promise<Response> {
    const data = await sendRequest(request);
    return data;
  }

  return {
    get,
  };
}

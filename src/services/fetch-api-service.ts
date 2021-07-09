export default function fetchAPIService() {
  async function sendRequest(request:Request):Promise<Response> {
    const response = await fetch(request);
    const data = await response.json();
    return data;
  }
  return {
    sendRequest,
  };
}

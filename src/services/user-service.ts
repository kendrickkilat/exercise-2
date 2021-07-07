import { HttpResponse } from '@/Interfaces/user';

export default function userService() {
  const url = 'https://randomuser.me/api/';
  const limit = 3;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  async function getAll<IUser>(page:number, gender:string): Promise<HttpResponse<IUser>> {
    const response: HttpResponse<IUser> = await fetch(`${url}?results=${limit}&page=${page}&gender=${gender}&noinfo`, options);
    response.parsedBody = await response.json();
    return response;
  }
  return {
    getAll,
  };
}

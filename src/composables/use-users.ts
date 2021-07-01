export default function useUsers() {
  const url = 'https://randomuser.me/api/';
  const limit = 5;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  async function getAll(page:number) {
    console.log('page', page);
    const response = await fetch(`${url}?results=${limit}&page=${page}`, options);
    return response.json();
  }

  async function getFiltered(gender:string, page:number) {
    const response = await fetch(`${url}?results=${limit}&page=${page}&gender=${gender}`, options);
    return response.json();
  }

  console.log(typeof ({ getAll }));
  return {
    getAll,
    getFiltered,
  };
}

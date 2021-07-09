import fetchAPIService from '@/services/fetch-api-service';
import { ref } from 'vue';

export default function useUsers() {
  const users = ref();
  const { sendRequest } = fetchAPIService();
  const url = 'https://randomuser.me/api/?';

  const limit = 3;

  const params = new URLSearchParams();
  params.set('results', limit.toString());

  const options = {
    methods: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  function getData(page: number, gender: string) {
    users.value = [];
    params.set('page', page.toString());
    params.set('gender', gender);
    const request = new Request(`${url}${params}`, options);

    sendRequest(request)
      .then((response) => {
        users.value = response;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return {
    users,
    getData,
  };
}

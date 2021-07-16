import { ref } from 'vue';
import useApi from './use-api';

export default function useUsers() {
  const users = ref();
  const url = 'https://randomuser.me/api/?';

  const limit = 6;

  const params = new URLSearchParams();
  params.set('results', limit.toString());

  const options = {
    methods: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const { get } = useApi();

  function getData(page: number, gender: string) {
    users.value = [];
    params.set('page', page.toString());
    params.set('gender', gender);
    const request = new Request(`${url}${params}`, options);

    get(request)
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

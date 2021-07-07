import userService from '@/services/user-service';
import { ref } from 'vue';

export default function useUsers() {
  const users = ref();
  const { getAll } = userService();

  function setData(page: number, gender: string) {
    users.value = [];
    getAll(page, gender)
      .then((response) => {
        users.value = response.parsedBody;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return {
    users,
    setData,
  };
}

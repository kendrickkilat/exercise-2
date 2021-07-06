import userService from '@/services/user-service';
import { computed, ref, watchEffect } from 'vue';

export default function useUsers(prop:{gender:string, page:number}) {
  const users = ref();
  const { getAll, getFiltered } = userService();
  const toPrevPage = computed(() => ({ name: 'Users', query: { page: prop.page - 1 } }));
  const toNextPage = computed(() => ({ name: 'Users', query: { page: prop.page + 1 } }));

  watchEffect(() => {
    users.value = [];
    if (prop.gender === 'All') {
      getAll(prop.page)
        .then((response) => {
          users.value = response.parsedBody;
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log(prop.gender);
      getFiltered(prop.gender.toLowerCase(), prop.page)
        .then((response) => {
          users.value = response.parsedBody;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  return {
    users,
    toPrevPage,
    toNextPage,
  };
}

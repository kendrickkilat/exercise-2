<template>
  <div v-for="user of users.results" v-bind:key="user.login.uuid" class="container mx-auto">
    <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-2">
      <div class="flex-shrink-0">
        <img :src="user.picture.thumbnail" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">
          <span>{{ user.name.first }} {{ user.name.last }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="pagination">
    <router-link
    class="btn btn-green"
    :to="toPrevPage"
    rel="prev"
    v-if="page != 1">Prev Page</router-link>

    <router-link
    class = "btn btn-green"
    :to="toNextPage"
    rel="next">Next Page</router-link>
  </div>
</template>

<script lang="ts">
import useUsers from '@/composables/use-users';
import {
  computed, defineComponent, ref, watchEffect,
} from 'vue';
import rn from '@/enums/route-names';
import router from '@/router';
import { IUser } from '@/Interfaces/user';

export default defineComponent({
  name: 'UserList',
  props: {
    gender: {
      type: String,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
  },
  setup(prop) {
    const { getAll, getFiltered } = useUsers();
    const users = ref();

    const toPrevPage = computed(() => ({ name: 'Users', query: { page: prop.page - 1 } }));
    const toNextPage = computed(() => ({ name: 'Users', query: { page: prop.page + 1 } }));
    function goToUserDetails(user: IUser) {
      return router.push({ name: rn.UserDetails, params: { id: user.login.uuid } });
    }
    watchEffect(() => {
      users.value = [];
      if (prop.gender === 'All') {
        getAll(prop.page)
          .then((response) => {
            console.log(response.parsedBody);
            users.value = response.parsedBody;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        getFiltered(prop.gender, prop.page)
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
      goToUserDetails,
      toPrevPage,
      toNextPage,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.pagination {
  margin-top:1.5em;
}

</style>

<template>
  <div v-for="user of users" v-bind:key="user.login.uuid">
    <a @click="goToUserDetails(user)">
      <span>
        <img :src="user.picture.thumbnail" />
      </span>
      <span>{{ user.name.first }} {{ user.name.last }}</span>
    </a>
  </div>
  <div class = 'pagination'>
    <router-link
    :to="toPrevPage"
    rel="prev"
    v-if="page != 1">Prev Page</router-link>

    <router-link
    :to="toNextPage"
    rel="next"
    >Next Page</router-link>
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

    const toPrevPage = computed(() => ({ name: 'Home', query: { page: prop.page - 1 } }));
    const toNextPage = computed(() => ({ name: 'Home', query: { page: prop.page + 1 } }));
    function goToUserDetails(user: IUser) {
      return router.push({ name: rn.UserDetails, params: { id: user.login.uuid } });
    }
    watchEffect(() => {
      console.log(prop.page);
      users.value = [];
      console.log(`Value: ${prop.gender}`);
      if (prop.gender === 'All') {
        getAll(prop.page)
          .then((response) => {
            const json = response;
            users.value = json.results;
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log(`else entered: ${prop.gender}`);
        getFiltered(prop.gender, prop.page)
          .then((response) => {
            const json = response;
            users.value = json.results;
            console.log(users.value);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });

    getAll(prop.page)
      .then((response) => {
        const json = response;
        users.value = json.results;
      })
      .catch((error) => {
        console.log(error);
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
a {
  color: #42b983;
}
</style>

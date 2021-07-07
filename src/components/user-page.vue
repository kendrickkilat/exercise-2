<template>
  <CircularLoader v-if="!users.results" />
  <div
    v-for="user of users.results"
    v-bind:key="user.login.uuid"
    class="max-w-2xl w-full mx-auto z-10"
  >
    <div class="flex flex-col">
      <!-- Add Details Page -->
      <div class="bg-gray-900 border border-gray-900 shadow-lg rounded-3xl p-4 m-4">
        <div class="flex-none sm:flex">
          <div class="h-32 w-32 sm:mb-0 mb-3">
            <img
              :src="user.picture.large"
              :alt="user.name.first"
              class="w-32 h-32 object-cover rounded-2xl"
            />
          </div>
          <div class="flex flex-col sm:ml-5 sm:mt-2 justify-start text-left flex-auto">
            <div
              class="w-full text-lg text-gray-200 font-bold leading-none"
            >{{ user.name.first }} {{ user.name.last }}</div>
            <div class="text-gray-400 my-1">
              <span class="mr-3">{{ user.email }}</span>
              <span class="mr-3 border-r border-gray-600 max-h-0"></span>
              <span>{{ user.location.city }}, {{ user.nat }}</span>
            </div>
            <div class="text-gray-400 my-0">
              <span class="mr-3">{{ user.login.username }}</span>
              <span class="mr-3 border-r border-gray-600 max-h-0"></span>
              <span>Age: {{ user.dob.age }}</span>
            </div>
            <div class="flex-auto justify-end text-gray-400 my-3 font-bold">
              <span class="mr-3">Gender: {{ user.gender === 'male' ? 'Male' : 'Female' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pagination flex justify-evenly">
    <router-link class="btn btn-green"
    :to="toPrevPage" rel="prev" v-if="page != 1">Prev Page</router-link>

    <router-link class="btn btn-green"
    :to="toNextPage" rel="next">Next Page</router-link>
  </div>
</template>

<script lang="ts">
import useUsers from '@/composables/use-users';
import CircularLoader from '@/components/circular-loader-component.vue';
import {
  computed,
  defineComponent,
  watchEffect,
} from 'vue';

export default defineComponent({
  name: 'UserList',
  components: {
    CircularLoader,
  },
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
    const toPrevPage = computed(() => ({ name: 'Users', query: { page: prop.page - 1 } }));
    const toNextPage = computed(() => ({ name: 'Users', query: { page: prop.page + 1 } }));
    const { users, setData } = useUsers();

    watchEffect(() => {
      setData(prop.page, prop.gender.toLowerCase());
    });
    return {
      toPrevPage,
      toNextPage,
      users,
    };
  },
});
</script>

<style scoped>
.pagination {
  margin-top: 1.5em;
}
</style>

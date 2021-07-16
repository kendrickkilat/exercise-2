<template>
  <CircularLoader v-if="!users.results" />
  <Modal :isShown="showModal" :data="modalData" @emitCloseModal="closeModal()"/>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
    <div
    v-for="user of users.results"
    v-bind:key="user.login.uuid"
    class="mx-auto cursor-pointer w-full"
    @click="showDetails(user)"
  >
      <div class="bg-gray-900 border border-gray-900 hover:bg-gray-700 shadow-lg rounded-3xl p-4 m-4">
        <div class="md:flex-none flex">
          <div class="h-32 w-32 sm:mb-0 mb-3 hidden sm:block">
            <img
              :src="user.picture.large"
              :alt="user.name.first"
              class="w-32 h-32 object-cover rounded-2xl"
            />
          </div>
          <div class="flex flex-col  sm:ml-5 sm:mt-2 justify-start text-center sm:text-left flex-auto">
            <div
              class="text-lg text-gray-200 font-bold leading-none"
            >{{ user.name.first }} {{ user.name.last }}</div>
            <div class="text-gray-400 my-1">
              <span class="mr-3">{{ user.email }}</span>
              <span class="mr-3 border-0 sm:border-r border-gray-600 max-h-0"></span>
              <span class="hidden sm:inline-block">{{ user.location.city }}, {{ user.nat }}</span>
            </div>
            <div class="text-gray-400 my-0">
              <span class="inline-block sm:hidden">{{ user.location.city }}, {{ user.nat }}</span>
            </div>
            <div class="text-gray-400 my-0">
              <span class="mr-3">{{ user.login.username }}</span>
              <span class="mr-3 border-r border-gray-600 max-h-0"></span>
              <span>Age: {{ user.dob.age }}</span>
            </div>
            <div class="flex-auto justify-end text-green-500 my-3 font-bold">
              <span class="mr-3">Gender: {{ user.gender === 'male' ? 'Male' : 'Female' }}</span>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
  <div v-if="users.results" class="my-2 flex justify-center md:justify-between text-center">
    <router-link class="btn btn-green flex-1"
    :to="toPrevPage" rel="prev" v-if="page != 1">Prev Page</router-link>
    <router-link class="btn btn-green flex-1"
    :to="toNextPage" rel="next">Next Page</router-link>
  </div>
</template>

<script lang="ts">
import useUsers from '@/composables/use-users';
import CircularLoader from '@/components/circular-loader-component.vue';
import Modal from '@/components/modal-component.vue';

import {
  computed,
  defineComponent,
  ref,
  watchEffect,
} from 'vue';
import { IUser } from '@/Interfaces/user';

export default defineComponent({
  name: 'UserList',
  components: {
    CircularLoader,
    Modal,
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

    const { users, getData } = useUsers();
    const showModal = ref(false);
    const modalData = ref();

    watchEffect(() => {
      getData(prop.page, prop.gender.toLowerCase());
    });

    function showDetails(data:IUser) {
      modalData.value = data;
      showModal.value = true;
    }
    function closeModal() {
      showModal.value = false;
    }
    return {
      toPrevPage,
      toNextPage,
      users,
      showDetails,
      modalData,
      showModal,
      closeModal,
    };
  },
});
</script>

<style scoped>
</style>

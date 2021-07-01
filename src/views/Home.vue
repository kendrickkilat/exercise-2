<template>
  <div class="home">
    <div class="gender-select" id="v-model-select">
      <select v-model="selected">
        <option disabled>Please select one</option>
        <option>All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <UserList :gender="selected" :page="parsedPageNumber" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UserList from '@/components/user-list-component.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  props: {
    page: {
      type: String,
      required: true,
    },
  },
  components: {
    UserList,
  },
  setup(prop) {
    const selected = ref('All');
    const pageNumber = ref(prop.page);
    const parsedPageNumber = ref(1);

    function parsePageNumber(page: string) {
      console.log('Home entered');
      parsedPageNumber.value = parseInt(page, 10);
    }
    parsePageNumber(pageNumber.value);

    return {
      selected,
      parsedPageNumber,
    };
  },
});
</script>

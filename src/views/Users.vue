<template>
  <div class="users">
    <h2 class="text-white m-1">Select Gender:</h2>
    <Dropdown :selected="selected" @emitSelected="setSelected"/>
    <UserList :gender="selected" :page="page" />
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UserList from '@/components/user-page.vue';
import Dropdown from '@/components/dropdown-component.vue';
import router from '@/router';

export default defineComponent({
  name: 'Users',
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  components: {
    UserList,
    Dropdown,
  },
  setup() {
    const selected = ref('All');

    function setSelected(data:string) {
      selected.value = data;
      router.push({ name: 'Users', query: { page: 1 } });
    }
    return {
      selected,
      setSelected,
    };
  },
});
</script>

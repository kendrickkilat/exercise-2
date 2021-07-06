<template>
  <div class="users">
    <h2 class="text-white m-1">Select Gender:</h2>
    <Dropdown :selections="selections" :selected="selected" @emitSelected="setSelected"/>
    <UserList :gender="selected" :page="page" />
</div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
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
    const selections:Ref<string[]> = ref([
      'All',
      'Male',
      'Female',
    ]);// enums

    function setSelected(data:string) {
      selected.value = data;
      router.push({ name: 'Users', query: { page: 1 } });
    }
    return {
      selected,
      selections,
      setSelected,
    };
  },
});
</script>

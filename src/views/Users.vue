<template>
  <div class="users">
    <Dropdown :selections="selections" :selected="selected" @selected="setSelected"/>
    <UserList :gender="selected" :page="page" />
</div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import UserList from '@/components/user-list-component.vue';
import Dropdown from '@/components/dropdown-component.vue';

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
    ]);

    function setSelected(data:string) {
      console.log(data);
      selected.value = data;
    }
    return {
      selected,
      selections,
      setSelected,
    };
  },
});
</script>

<template>
  <div class="users ">
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
    gender: {
      type: String,
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
      router.push({ name: 'Users', query: { page: 1, gender: data.toLowerCase() } });
    }
    return {
      selected,
      setSelected,
    };
  },
});
</script>

<template>
  <div class="users flex flex-row">
    <div class="flex-1 flex flex-col">
    </div>
    <div class="flex-2 flex-shrink-0">
      <Dropdown :selected="selected" @emitSelected="setSelected"/>
      <UserList :gender="selected" :page="page" />
    </div>
    <div class="flex-1"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UserList from '@/components/user-page.vue';
import Dropdown from '@/components/dropdown-component.vue';
import router from '@/router';
import RouteNames from '@/enums/route-names';
import Selections from '@/enums/selections';

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
    const selected = ref(Selections.All);

    function setSelected(data:Selections) {
      selected.value = data;
      router.push({ name: RouteNames.Users, query: { page: 1 } });
    }
    return {
      selected,
      setSelected,
    };
  },
});
</script>

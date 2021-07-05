<template>
  <div class="users">
    <!-- <Dropdown :selections="selections"/> -->
    <div class="gender-select" id="v-model-select">
      <select v-model="selected">
        <option disabled="true">Please select one</option>
        <option>All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <UserList :gender="selected" :page="page" />
</div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import UserList from '@/components/user-list-component.vue';
// import Dropdown from '@/components/dropdown-component.vue';

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
    // Dropdown,
  },
  setup() {
    const selected = ref('All');
    const selections:Ref<string[]> = ref([
      'All',
      'Male',
      'Female',
    ]);
    return {
      selected,
      selections,
    };
  },
});
</script>

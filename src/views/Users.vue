<template>
    <div class="users">
        <div class="gender-select" id="v-model-select">
            <select v-model="selected">
                <option disabled>Please select one</option>
                <option>All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        <UserList :gender="selected" :page="page" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UserList from '@/components/user-list-component.vue';

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
  },
  setup() {
    const selected = ref('All');
    return {
      selected,
    };
  },
});
</script>

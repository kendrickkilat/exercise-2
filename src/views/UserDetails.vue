<template>
    <div></div>
</template>

<script lang ="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserDetails',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
});
</script>

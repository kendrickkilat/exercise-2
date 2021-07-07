<template>
    <div
        class="loader
        mx-auto ease-linear
        rounded-full border-4
        border-t-4 h-10 w-10 mb-4
        border-transparent mt-10"
    ></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CircularLoader',
});
</script>
<style>
.loader {
    border-top-color: aquamarine;
    -webkit-animation: spinner 0.5s linear infinite;
    animation: spinner 0.5s linear infinite;
}
@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>

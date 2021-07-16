<template>
        <div class="flex items-center justify-end m-2 z-900">
            <h2>Select Gender: </h2>
            <div class="relative inline-block text-left dropdown mx-2 ">
                <span class="rounded-md shadow-sm">
                    <button
                        class="main-dropdown-button"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded="true"
                        aria-controls="headlessui-menu-items-117"
                        @click = "toggleDropdown()"
                    >
                        <span>{{selected}}</span>
                        <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fill-rule="evenodd"
                                d="M5.293
                                7.293a1
                                1 0 011.414 0L10
                                10.586l3.293-3.293a1 1
                                0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </span>
                <div
                    v-if="isShown"
                    class="
                    invisible
                    dropdown-menu
                    transition-all
                    duration-300
                    transform
                    origin-top-right -translate-y-2 scale-95"
                >
                    <div
                        class="absolute right-0 w-56 mt-2 origin-top-right
                        bg-gray-700 border divide-y divide-gray-800 border-gray-800
                        rounded-md shadow-lg outline-none flex flex-col"
                        aria-labelledby="headlessui-menu-button-1"
                        id="headlessui-menu-items-117"
                        role="menu"
                    >
                        <div class="px-4 py-3 bg-gray-500">
                            <p class="text-sm text-gray-50 leading-5">Select Gender</p>
                        </div>
                        <div class="py-1"
                        v-for="selection in Selections"
                        v-bind:key="selection">
                            <a
                                @click="emitSelected(selection)"
                                tabindex="0"
                                class="text-white
                                w-full flex
                                px-4 py-2 text-sm leading-5 text-left
                                hover:bg-gray-600 cursor-pointer"
                                role="menuitem"
                            >{{selection}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import Selections from '@/enums/selections';

export default defineComponent({
  name: 'Dropdown',
  props: {
    selected: {
      type: String,
      required: true,
    },
  },
  emits: ['emitSelected'],
  setup(_prop, { emit }) {
    const isShown = ref(false);
    function toggleDropdown() {
      isShown.value = !isShown.value;
    }
    function emitSelected(value: Selections) {
      emit('emitSelected', value);
      toggleDropdown();
    }
    return {
      emitSelected,
      isShown,
      toggleDropdown,
      Selections,
    };
  },
});
</script>
<style>
.dropdown:focus-within .dropdown-menu {
    opacity: 1;
    transform: translate(0) scale(1);
    visibility: visible;
}

</style>

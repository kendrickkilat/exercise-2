<template>
        <div class="flex items-center justify-center p-12 z-990">
            <div class="relative inline-block text-left dropdown">
                <span class="rounded-md shadow-sm">
                    <button
                        class="main-dropdown-button"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded="true"
                        aria-controls="headlessui-menu-items-117"
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
                    class="opacity-0
                    invisible
                    dropdown-menu
                    transition-all
                    duration-300
                    transform
                    origin-top-right -translate-y-2 scale-95"
                >
                    <div
                        class="absolute right-0 w-56 mt-2 origin-top-right
                        bg-white border border-gray-200 divide-y divide-gray-100
                        rounded-md shadow-lg outline-none"
                        aria-labelledby="headlessui-menu-button-1"
                        id="headlessui-menu-items-117"
                        role="menu"
                    >
                        <div class="px-4 py-3">
                            <p class="text-sm leading-5">Select Gender</p>
                        </div>
                        <div class="py-1"
                        v-for="(selection, index) in selections"
                        v-bind:key="index">
                            <a
                                @click="setSelected(selection)"
                                tabindex="0"
                                class="text-gray-700
                                flex justify-between
                                w-full px-4 py-2 text-sm leading-5 text-left
                                hover:bg-gray-100 cursor-pointer"
                                role="menuitem"
                            >{{selection}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'Dropdown',
  props: {
    selections: {
      type: Object as PropType<string[]>,
      required: true,
    },
  },
  setup() {
    const selected = ref('All');
    function setSelected(value:string) {
      selected.value = value;
    }
    return {
      selected,
      setSelected,
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

<template>
	<TransitionRoot appear :show="isOpen" as="template" v-if="data">
		<Dialog as="div" @close="closeModal">
			<div class="fixed inset-0 z-10 overflow-y-auto">
				<div class="min-h-screen px-4 text-center">
					<DialogOverlay class="fixed inset-0 bg-black opacity-50" />
					<span class="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<div
							class="inline-block w-full max-w-md py-6 pt-0 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl rounded-2xl"
						>
							<div class="">
								<div class="bg-gray-800 shadow overflow-hidden sm:rounded-lg">
									<div class="px-4 py-5 sm:px-6 text-center flex content-center flex-col items-center">
										<div>
											<img :src="data.picture.large" class = "rounded-xl"/>
										</div>
										<h3 class="text-lg leading-6 font-medium text-white mt-3">{{ data.name.first }} {{ data.name.last }}</h3>
										<p class="mt-1 max-w-2xl text-sm text-gray-500">Personal Details</p>
									</div>
									<div class="border-t border-gray-800">
										<dl>
											<div class="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
												<dt class="text-sm font-medium text-gray-500">Full name</dt>
												<dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{{ data.name.title }}. {{ data.name.first }} {{ data.name.last }}</dd>
											</div>
											<div class="bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
												<dt class="text-sm font-medium text-gray-500">Gender</dt>
												<dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{{ data.gender.toUpperCase() }}</dd>
											</div>
											<div class="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
												<dt class="text-sm font-medium text-gray-500">Email address</dt>
												<dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">{{ data.email }}</dd>
											</div>
											<div class="bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
												<dt class="text-sm font-medium text-gray-500">Address</dt>
												<dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2"> {{data.location.street.number}} {{data.location.street.name}}, {{ data.location.city }} {{data.location.state }} -  {{data.location.postcode}}</dd>
											</div>
											<div class="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
												<dt class="text-sm font-medium text-gray-500">Date of Birth</dt>
												<dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
													{{ data.dob.date }}
												</dd>
											</div>
											<div class="bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
												<dt class="text-sm font-medium text-gray-500">Age</dt>
												<dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
													{{ data.dob.age }}
												</dd>
											</div>
											<div class="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
												<dt class="text-sm font-medium text-gray-500">Phone</dt>
												<dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
													{{ data.phone }}
												</dd>
											</div>
											<div class="bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
												<dt class="text-sm font-medium text-gray-500">Cell</dt>
												<dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
													{{ data.cell }}
												</dd>
											</div>
											<div class="bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
												<dt class="text-sm font-medium text-gray-500">Nationality</dt>
												<dd class="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
													{{ data.nat }}
												</dd>
											</div>
										</dl>
									</div>
								</div>
							</div>

							<div class="mt-4 flex items-stretch">
								<button
									type="button"
									class="w-full mx-5 px-4 py-2 text-sm font-semibold text-white bg-red-500 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
									@click="closeModal"
								>Close</button>
							</div>
						</div>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script lang="ts">
import {
  defineComponent, PropType, ref, watchEffect,
} from 'vue';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
} from '@headlessui/vue';
import { IUser } from '@/Interfaces/user';

export default defineComponent({
  name: 'Modal',
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
  },
  props: {
    isShown: {
      type: Boolean,
      required: false,
    },
    data: {
      type: Object as PropType<IUser>,
      required: false,
    },
  },
  emits: ['emitCloseModal'],
  setup(prop, { emit }) {
    const isOpen = ref(false);

    watchEffect(() => {
      if (prop.isShown) {
        isOpen.value = true;
      } else {
        isOpen.value = false;
      }
    });

    function closeModal() {
      isOpen.value = false;
      emit('emitCloseModal');
    }

    return {
      isOpen,
      closeModal,
      openModal() {
        isOpen.value = true;
      },
    };
  },
});
</script>

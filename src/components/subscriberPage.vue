<template>
  <div class="flex gap-x-3 items-center">
    <h2 class="text-lg font-semibold cursor-pointer" @click="hidden = !hidden">
      Subscriber Status
    </h2>
    <button
      @click="hidden = !hidden"
      :class="
        hidden === true
          ? 'transition-transform rotate-180 duration-300 ease-in-out'
          : 'transition-transform rotate-0 duration-300 ease-in-out'
      "
    >
      <ChevronDownIcon class="w-5 h-5" />
    </button>
  </div>
  <TransitionRoot
    appear
    :show="hidden"
    as="template"
    enter="transform transition duration-[400ms]"
    enter-from="opacity-0 -translate-y-2"
    enter-to="opacity-100 translate-y-0"
    leave="transform duration-200 transition ease-in-out"
    leave-from="opacity-100 translate-y-0"
    leave-to="opacity-0 -translate-y-2 "
  >
    <section>
      <div>
        <span class="space-x-2">
          <!-- <input
            type="checkbox"
            id="all"
            v-model="checkAll"
            @change="toggleCheckAll"
            class="accent-[#f7c906]"
          />
          <label for="all">All</label> -->

          <label class="gap-x-3 cursor-pointer flex items-center" >
            <input type="checkbox" checked="checked" class="checkbox checkbox-sm [--chkbg:#f7c906]" v-model="checkAll" @change="toggleCheckAll"  />
            <span class="label-text text-md">All</span>
          </label>
        </span>
        <span v-for="item in selectList" :key="item.name" class="grid mt-2">
          <!-- <span class="space-x-2">
            <input
              type="checkbox"
              :value="item.value"
              :id="item.name"
              v-model="checkItems"
              class="accent-[#f7c906]"
            />
            <label :for="item.name">{{ item.name }}</label>
          </span> -->
          <label class="gap-x-3 cursor-pointer flex items-center" >
            <input type="checkbox" checked="checked" class="checkbox checkbox-sm [--chkbg:#f7c906] " v-model="checkItems" :value="item.value"  />
            <span class="label-text text-md">{{ item.name }}</span>
          </label>
        </span>
      </div>
    </section>
  </TransitionRoot>
</template>

<script setup>
import { ref, defineEmits, watch } from 'vue'
import { TransitionRoot } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
//chevron-down

const emit = defineEmits('data-selected')

const selectList = ref([
  { name: 'Idle', value: 1 },
  { name: 'Active', value: 2 },
  { name: 'Call Barring', value: 3 },
  { name: 'Suspend', value: 4 },
  { name: 'Pool', value: 8 }
])

const checkItems = ref([])
const checkAll = ref(false)
const hidden = ref(true)

const toggleCheckAll = () => {
  if (checkAll.value) {
    checkItems.value = selectList.value.map((item) => item.value)
  } else {
    checkItems.value = []
  }
}

watch(checkItems, (newValue) => {
  emit('data-selected', newValue)
})
</script>

<template>
  <section>
    <loadingPage v-if="loading" />
    <div class="grid grid-cols-1 md:gap-x-4 gap-y-4 relative md:grid-cols-2">
      <div class="inline-flex w-full relative overflow-hidden h-11 rounded-md">
        <div
          class="bg-black w-full h-full opacity-15 cursor-pointer rounded-md absolute z-10"
          :class="
            showSelected === false
              ? 'transition-transform translate-x-0 duration-500 ease-in-out delay-100'
              : 'transition-transform translate-x-full duration-500 ease-in-out delay-200'
          "
          @click="showSelected = !showSelected"
        ></div>
        <input
          class="border-y border-l p-2 h-11 rounded-s-md text-sm focus:outline-1 focus:outline-[#f7c906]"
          type="text"
          placeholder="Search..."
          v-model="searchOffer"
        />
        <select
          class="border p-2 w-full truncate rounded-e-md h-11 focus:outline-none"
          v-model="selectedOfferId"
        >
          <option value="" disabled selected>Select an option</option>
          <option v-for="item in filterOffer" :key="item.offering_id" :value="item.offering_id">
            {{ item.offering_id + ' - ' + item.offering_name }}
          </option>
        </select>
      </div>
      <div>
        <div class="inline-flex w-full relative overflow-hidden rounded-md">
          <form class="w-full">
            <div
              class="bg-black w-full h-full absolute opacity-15 cursor-pointer rounded-md"
              :class="
                showSelected === true
                  ? 'transition-transform translate-x-0 duration-500 ease-in-out delay-100'
                  : 'transition-transform -translate-x-full duration-500 ease-in-out delay-200'
              "
              @click="showSelected = !showSelected"
            ></div>
            <label for="file-input" class="sr-only">Choose file</label>
            <input
              @change="handleFileUpload"
              accept=".txt"
              type="file"
              name="file-input"
              id="file-input"
              class="block w-full h-11 border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-[#f7c906] focus:ring-[#f7c906] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400"
            />
          </form>
        </div>
        <div v-if="showSelected === false" class="inline-flex gap-x-2 text-sm text-gray-500 mt-1">
          <ExclamationCircleIcon class="h-5 w-5" />
          <div class="inline-flex gap-x-2">
            <div>
              <p>อัปโหลดไฟล์(.txt) Offer id ตัวอย่าง</p>
            </div>
            <div class="inline-block">
              <p>51005338</p>
              <p>51005339</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <nav v-if="historySelectedOfferId.length > 0">
      <button @click="clearAll" class="hover:text-slate-400">clear all</button>
      <div class="flex gap-x-2 py-2 px-1">
        <p
          v-for="(item, i) in historySelectedOfferId"
          :key="i"
          class="px-2 py-1 rounded-full flex items-center gap-x-2 text-xs border border-[#f7c906] cursor-default"
        >
          {{ item }}
          <span class="inline-flex items-center">
            <button @click="removeItem(i)">
              <XMarkIcon class="h-5 w-5 fill-red-600 hover:fill-red-400" />
            </button>
          </span>
        </p>
      </div>
    </nav>
  </section>
</template>

<script setup>
import { ref, onMounted, watch, computed, defineEmits } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { ExclamationCircleIcon } from '@heroicons/vue/24/outline'

import useApi from '@/composable/api'
import loadingPage from './loadingPage.vue'

const { getOffering, loading } = useApi()

const searchOffer = ref('')
const selectData = ref([])
const selectedOfferId = ref('')
const historySelectedOfferId = ref([])
const showSelected = ref(true)

const emit = defineEmits('data-selected')

onMounted(async () => {
  selectData.value = await getOffering()
})

watch(selectedOfferId, (newValue) => {
  if (newValue && !historySelectedOfferId.value.includes(newValue)) {
    historySelectedOfferId.value.push(newValue)
    emit('data-selected', historySelectedOfferId.value)
    searchOffer.value = ''
    selectedOfferId.value = ''
  }
})

const filterOffer = computed(() => {
  return selectData.value.filter((item) => {
    let string_id = item.offering_id.toString()
    return (
      string_id.toLowerCase().includes(searchOffer.value.toLowerCase()) ||
      item.offering_name.toLowerCase().includes(searchOffer.value.toLowerCase())
    )
  })
})
const removeItem = (index) => {
  historySelectedOfferId.value.splice(index, 1)
}

const handleFileUpload = (event) => {
  const file = event.target.files[0]

  if (file && file.type === 'text/plain') {
    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target.result
      historySelectedOfferId.value = text.split('\r\n').filter((item) => item !== '')
      emit('data-selected', historySelectedOfferId.value)
      event.target.value = ''
    }
    reader.readAsText(file)
  }
}

const clearAll = () => {
  historySelectedOfferId.value = []
  emit('data-selected', historySelectedOfferId.value)
}
</script>

<style scoped>
nav div {
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;
}
nav div::-webkit-scrollbar {
  height: 4px;
  width: 4px;
}
nav div::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  width: 4px;
}
</style>

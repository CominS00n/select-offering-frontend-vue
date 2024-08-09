<template>
  <div>
    <input class="border p-3" type="text" placeholder="Search" v-model="searchOffer" />
    <select name="" id="" class="border p-3" v-model="selectedOfferId">
      <option value="" disabled selected>Select an option</option>
      <option
        v-for="item in filterOffer"
        :key="item.offering_id"
        :value="item.offering_id"
        @click="handleSelect"
      >
        {{ item.offering_id + ' - ' + item.offering_name }}
      </option>
    </select>

    <div class="flex gap-x-3">
      <p
        v-for="(item, i) in historySelectedOfferId"
        :key="i"
        class="px-3 py-2 bg-gray-400 rounded-md flex items-center gap-x-2"
      >
        {{ item }}
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </span>
      </p>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'

import { ref, onMounted, watch, computed } from 'vue'

const searchOffer = ref('')
const selectData = ref([])
const selectedOfferId = ref()
const historySelectedOfferId = ref([])
onMounted(async () => {
  selectData.value = await getSelectData()
})

const getSelectData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/offerlist')
    return response.data
  } catch (error) {
    return error
  }
}

watch(selectedOfferId, (newValue) => {
  if (newValue) {
    historySelectedOfferId.value.push(newValue)
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
</script>

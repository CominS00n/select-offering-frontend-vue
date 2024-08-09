<template>
  <loadingPage v-if="loading" />
  <div>
    <input class="border p-3" type="text" placeholder="Search" v-model="searchOffer" />
    <select name="" id="" class="border p-3" v-model="selectedOfferId">
      <option value="" disabled selected>Select an option</option>
      <option
        v-for="item in filterOffer"
        :key="item.offering_id"
        :value="item.offering_id"
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
        <span>
          <button @click="removeItem(i)">
            <XMarkIcon class="h-5 w-5" />
          </button>
        </span>
      </p>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted, watch, computed, defineEmits } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import loadingPage from './loadingPage.vue'

const searchOffer = ref('')
const selectData = ref([])
const selectedOfferId = ref('')
const historySelectedOfferId = ref([])

const loading = ref(false)

const emit = defineEmits('data-selected')

onMounted(async () => {
  selectData.value = await getSelectData()
})

const getSelectData = async () => {
  try {
    const response = await axios.get(
      'http://localhost/select-offering-frontend-vue/public/getOffering.php'
    )
    return response.data
  } catch (error) {
    return error
  } finally {
    loading.value = false
  }
}

watch(selectedOfferId, (newValue) => {
  if (newValue && !historySelectedOfferId.value.includes(newValue)) {
    historySelectedOfferId.value.push(newValue)
    emit('data-selected', historySelectedOfferId.value)
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

</script>

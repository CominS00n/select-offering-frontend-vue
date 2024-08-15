<template>
  <header class="space-y-3 py-3 px-6">
    <muliComboBox @data-selected="handleOffer" />
    <subscriberPage @data-selected="handleStatus" />
  </header>
  <main class="py-3 px-6 space-y-5">
    <loadingPage v-if="loading" />
    <button type="submit" @click="sendData" class="w-full bg-green-600 py-2 rounded-md text-white">
      Search
    </button>
    <article>
      <dataTable :data-value="userList" :total-pages="totalCount" />
    </article>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useToast } from 'vue-toastification'
import useApi from '@/composable/api'

import muliComboBox from './components/muliComboBox.vue'
import subscriberPage from './components/subscriberPage.vue'
import dataTable from './components/dataTable.vue'
import loadingPage from './components/loadingPage.vue'

const { getUsers, userList, loading, totalCount } = useApi()
const toast = useToast()

const selectStatus = ref([])
function handleStatus(data) {
  selectStatus.value = data
}

const selectOffer = ref([])
function handleOffer(data) {
  selectOffer.value = data
}

const sendData = () => {
  if (selectOffer.value.length === 0 || selectStatus.value.length === 0) {
    toast.error('Please select at least one filter', { timeout: 3000 })
  } else {
    const formData = reactive({
      o_id: selectOffer.value,
      status: selectStatus.value
    })

    getUsers(formData)
  }
}
</script>

<style lang="css">
header {
  object-fit: contain;
  overflow: hidden;
  background-color: white;
  transition: box-shadow 0.3s ease;
}

.sticky-shadow {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>

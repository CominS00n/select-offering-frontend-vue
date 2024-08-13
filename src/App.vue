<template>
  <header id="header" class="sticky top-0 bg-white px-6 py-3 z-[99]">
    <muliComboBox @data-selected="handleOffer" />
    <subscriberPage @data-selected="handleStatus" />
    <button type="submit" @click="sendData">Search</button>
  </header>
  <main class="px-6">
    <loadingPage v-if="loading" />
    <dataTable :data-value="userList" :total-pages="totalCount" />
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import useApi from '@/composable/api'

import muliComboBox from './components/muliComboBox.vue'
import subscriberPage from './components/subscriberPage.vue'
import dataTable from './components/dataTable.vue'
import loadingPage from './components/loadingPage.vue'

const { getUsers, userList, loading, totalCount } = useApi()

const selectStatus = ref([])
function handleStatus(data) {
  selectStatus.value = data
}

const selectOffer = ref([])
function handleOffer(data) {
  selectOffer.value = data
}

const sendData = () => {
  const formData = reactive({
    o_id: selectOffer.value,
    status: selectStatus.value
  })

  getUsers(formData)
}
</script>

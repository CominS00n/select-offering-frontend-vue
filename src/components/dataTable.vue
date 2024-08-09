<template>
  <section class="w-full overflow-x-auto min-h-[540px]">
    <p>{{ dataTable.length }}</p>
    <loadingPage v-if="loading" />
    <table class="w-full">
      <tr>
        <th>MSISDN</th>
        <th>PAYMENT_MODE</th>
        <th>SUBSCRIBER_STATUS</th>
        <th>OFFER_ID</th>
        <!-- <th>OFFER_NAME</th> -->
        <th>PRIMARY_FLAG</th>
        <th>OFFER_STATUS</th>
        <th>OFFER_EFFECT_DATE</th>
        <th>OFFER_EXP_DATE</th>
      </tr>
      <tr v-for="item in dataTable" :key="item.MSISDN">
        <td>{{ item.MSISDN }}</td>
        <td>{{ item.PAYMENT_MODE }}</td>
        <td>{{ item.SUBSCRIBER_STATUS }}</td>
        <td>{{ item.OFFER_ID }}</td>
        <!-- <td>{{ item.OFFER_NAME }}</td> -->
        <td>{{ item.PRIMARY_FLAG }}</td>
        <td>{{ item.OFFER_STATUS }}</td>
        <td>{{ item.OFFER_EFFECT_DATE }}</td>
        <td>{{ item.OFFER_EXP_DATE }}</td>
      </tr>
    </table>
  </section>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

import loadingPage from './loadingPage.vue'

const dataTable = ref([])
const loading = ref(true)

const getDataTable = async () => {
  try {
    const response = await axios.get(
      'http://localhost/select-offering-frontend-vue/public/getUser.php'
    )
    return response.data
  } catch (error) {
    return error
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  dataTable.value = await getDataTable()
})
</script>

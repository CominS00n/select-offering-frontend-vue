<template>
  <header class="sticky top-0 bg-white px-6 py-3">
    <muliComboBox @data-selected="handleOffer" />
    <subscriberPage />
    <button type="submit">Search</button>
  </header>
  <main>
    <dataTable />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import muliComboBox from './components/muliComboBox.vue'
import subscriberPage from './components/subscriberPage.vue'
import dataTable from './components/dataTable.vue'

const selectOffer = ref(null)
function handleOffer(data) {
  selectOffer.value = data
}
</script>

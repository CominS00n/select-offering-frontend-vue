<template>
  <header></header>
  <main>
    <muliComboBox />
  </main>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import muliComboBox from './components/muliComboBox.vue'

const selectData = ref(null)

const getSelectData = async () => {
  try {
    const response = await axios.get('http://localhost:8080/offerlist')
    return response.data
  } catch (error) {
    return error
  }
}

onMounted(async () => {
  selectData.value = await getSelectData()
})
</script>

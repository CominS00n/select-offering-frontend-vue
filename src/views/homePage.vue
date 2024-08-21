<template>
    <header id="header" class="py-3 px-6 rounded-md space-y-3">
      <h1 class="text-3xl font-bold uppercase text-[#F7C906] mb-6">
        OCS <span class="text-black capitalize">Current Offers</span>
      </h1>
      <muliComboBox @data-selected="handleOffer" />
      <subscriberPage @data-selected="handleStatus" />
      <button
        type="submit"
        @click="sendData"
        class="btn w-full bg-[#F7C906] rounded-md mt-3 font-semibold transition hover:border-none hover:bg-[#f7cb06c3] text-white hover:duration-300 hover:ease-in-out hover:bg-white hover:text-[#F7C906] hover:outline hover:outline-[1px] hover:outline-[#F7C906]"
      >
        Search
      </button>
    </header>
    <main class="py-3 px-6 space-y-5 bg-white rounded-md mt-2 min-h-80 h-screen overflow-hidden">
      <article class="h-full">
        <loadingPage v-if="loading" />
        <dataTable :data-value="userList" :total-pages="totalCount" />
      </article>
    </main>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  import { useToast } from 'vue-toastification'
  import useApi from '@/composable/api'
  
  import muliComboBox from '../components/muliComboBox.vue'
  import subscriberPage from '../components/subscriberPage.vue'
  import dataTable from '../components/dataTable.vue'
  import loadingPage from '../components/loadingPage.vue'
  
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
      toast.error('Please select offering and subscription status', { timeout: 3000 })
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
  
  article::-webkit-scrollbar {
    width: 3px;
  }
  
  article::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 0.25rem;
  }
  </style>
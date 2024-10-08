import axios from 'axios'

import { ref } from 'vue'

// axios.defaults.baseURL = 'http://localhost/select-offering-frontend-vue/public'
axios.defaults.baseURL = 'http://offering.rtc.mybynt.com/ocs_current_offers'

export default function useApi() {
  const userList = ref([])
  const error = ref(null)
  const loading = ref(false)
  const totalCount = ref(0)

  const getUsers = async (data) => {
    try {
      loading.value = true
      const response = await axios.get('/getOcsCurrent.php', {
        params: {
          o_id: data.o_id,
          status: data.status
        }
      })
      userList.value = response.data
      totalCount.value = response.data.length
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
    console.log(data)
  }

  const getOffering = async () => {
    try {
      loading.value = true
      const response = await axios.get('/getOfferName.php')
      return response.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }
  return { userList, error, getUsers, loading, totalCount, getOffering }
}

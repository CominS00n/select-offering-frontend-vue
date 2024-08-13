<template>
  <section class="w-full overflow-x-auto min-h-[540px] relative overflow-y-scroll">
    <loadingPage v-if="loading" />
    <div class="flex justify-end w-full">
      <div class="flex gap-x-3">
        <select name="limit" id="limit" v-model="limit">
          <option
            v-for="item in limitList"
            :key="item.name"
            :value="item.value"
            @change="item.value"
          >
            {{ item.name }}
          </option>
        </select>
        <div class="flex items-center h-7" v-if="totalPages > 0">
          <button
            class="border-slate-300 border-l border-y rounded-s-full w-8 h-full flex justify-center items-center"
            @click="goToPreviousPage"
            :disabled="currentPage === 1"
          >
            <ChevronLeftIcon class="h-5 w-5" />
          </button>
          <span
            class="flex justify-center items-center border border-slate-300 min-w-14 h-full w-auto px-2"
            >{{ currentPage }} / {{ totalPages }}</span
          >
          <button
            class="border-slate-300 border-r border-y rounded-e-full w-8 h-full flex justify-center items-center"
            @click="goToNextPage"
            :disabled="currentPage === totalPages"
          >
            <ChevronRightIcon class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
    <table class="w-full ">
      <tr class="bg-white">
        <th>No</th>
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
      <tr
        v-for="item in paginatedUser"
        :key="item.MSISDN"
        class="text-center"
        :class="item.RNUM % 2 === 0 ? 'bg-orange-100' : ''"
      >
        <td>{{ item.RNUM }}</td>
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
import { ref, watch, defineProps, computed, onUpdated } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  dataValue: {
    type: Array,
    required: true,
    default: null
  },
  totalPages: {
    type: Number,
    required: true,
    default: null
  }
})

const limit = ref(0)

onUpdated(() => {
  if (limit.value === 0) {
    pageSize.value = props.dataValue.length
  }
})

watch(limit, (value) => {
  currentPage.value = 1
  if (value !== 0) {
    pageSize.value = value
  }
})

const limitList = ref([
  {
    name: 'All',
    value: 0
  },
  {
    name: '100',
    value: 100
  },
  {
    name: '300',
    value: 300
  },
  {
    name: '500',
    value: 500
  },
  {
    name: '1000',
    value: 1000
  },
  {
    name: '10000',
    value: 10000
  }
])

const currentPage = ref(1)

const pageSize = ref(0)

const totalPages = computed(() => Math.ceil(props.dataValue.length / pageSize.value))

const paginatedUser = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize.value
  const endIndex = startIndex + pageSize.value
  return props.dataValue.slice(startIndex, endIndex)
})

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

function goToPreviousPage() {
  goToPage(currentPage.value - 1)
}

function goToNextPage() {
  goToPage(currentPage.value + 1)
}
</script>

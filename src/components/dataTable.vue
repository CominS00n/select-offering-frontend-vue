<template>
  <section class="w-full space-y-3 bg-white">
    <loadingPage v-if="loading" />
    <div
      class="flex items-center h-9"
      :class="totalPages === 0 ? 'justify-end' : 'justify-between'"
    >
      <div v-if="totalPages > 0">
        <button class="export inline-flex justify-center items-center" @click="download">
          <DocumentArrowUpIcon class="icon h-5 w-5" />
        </button>
      </div>
      <div class="inline-flex gap-x-3">
        <select class="border rounded-md cursor-pointer" name="limit" id="limit" v-model="limit">
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
            class="border-slate-300 border-l border-y rounded-s-full w-8 h-full flex justify-center items-center cursor-pointer"
            :class="currentPage === 1 ? 'bg-gray-100' : ''"
            @click="goToPreviousPage"
            :disabled="currentPage === 1"
          >
            <ChevronLeftIcon class="h-5 w-5" />
          </button>
          <span
            class="flex justify-center items-center border border-slate-300 min-w-14 h-full w-auto px-2 cursor-default"
            >{{ currentPage }} / {{ totalPages }}</span
          >
          <button
            class="border-slate-300 border-r border-y rounded-e-full w-8 h-full flex justify-center items-center cursor-pointer"
            :class="currentPage === totalPages ? 'bg-gray-100' : ''"
            @click="goToNextPage"
            :disabled="currentPage === totalPages"
          >
            <ChevronRightIcon class="h-5 w-5" />
          </button>
        </div>
        <p class="cursor-default">Total Row: {{ props.totalPages }}</p>
      </div>
    </div>

    <table class="w-full border">
      <thead class="sticky top-0">
        <tr class="bg-white font-semibold capitalize">
          <th>MSISDN</th>
          <th>PAYMENT MODE</th>
          <th>SUBSCRIBER STATUS</th>
          <th>OFFER ID</th>
          <!-- <th>OFFER_NAME</th> -->
          <th>PRIMARY FLAG</th>
          <th>OFFER STATUS</th>
          <th>OFFER EFFECT DATE</th>
          <th>OFFER EXP DATE</th>
        </tr>
      </thead>
      <tbody v-if="totalPages > 0">
        <tr
          v-for="item in paginatedUser"
          :key="item.MSISDN"
          class="text-center overflow-y-auto truncate"
          :class="item.RNUM % 2 === 0 ? 'bg-[#f7cb0660]' : ''"
        >
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
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="8" class="text-center py-10">No data available</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { ref, watch, defineProps, computed } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import { DocumentArrowUpIcon } from '@heroicons/vue/24/outline'

import Export from '@/script/export-csv'

const { exportToCsv } = Export()

const download = () => {
  const date = new Date()
  const padZero = (num) => num.toString().padStart(2, '0')
  const timeString = `${padZero(date.getHours())}${padZero(date.getMinutes())}${padZero(date.getSeconds())}`
  const dateString = date.toISOString().slice(0, 10)
  exportToCsv(props.dataValue, `${dateString}-${timeString}.csv`)
}

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

const limit = ref(100)

watch(limit, (value) => {
  currentPage.value = 1
  if (value !== 0) {
    pageSize.value = value
  }
})

const limitList = ref([
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
    name: '5000',
    value: 5000
  }
])

const currentPage = ref(1)

const pageSize = ref(100)

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

<style scoped lang="css">
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 0.375rem;
  overflow: hidden;
}

thead th {
  padding: 0.5rem;
  background-color: #f9f9f9;
}

tbody tr {
  border-bottom: 1px solid #e5e7eb;
}

tbody tr:nth-child(even) {
  background-color: #f7cb0660;
}

td {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.export {
  position: relative;
  background-color: #f9f9f9;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 0.5rem;
  width: 40px;
  overflow: hidden;
  transition:
    width 0.5s ease,
    background-color 0.5s ease;
}

.export:hover {
  background-color: #f7c906;
  fill: #fff;
  width: 120px;
  border: none;
}

.export:hover .icon {
  stroke: #fff;
}

.export::before {
  content: 'Export';
  position: absolute;
  background-color: #f7c906;
  color: white;
  width: 120px;
  padding: 0.5rem;
  opacity: 0;
  transition:
    width 0.5s ease,
    z-index 0.5s ease,
    opacity 0.5s ease;
}

.export:hover::before{
  opacity: 1;
  z-index: 2;
}
</style>

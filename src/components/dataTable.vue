<template>
  <section class="flex flex-col w-full h-full space-y-3 bg-white overflow-hidden">
    <loadingPage v-if="loading" />
    <div
      class="sm:flex sm:items-center sm:h-10 space-y-2 bg-white p-1"
      :class="totalPages > 0 ? 'sm:justify-between' : 'sm:justify-end'"
    >
      <div v-if="totalPages > 0" class="inline-flex items-center gap-x-3">
        <div class="relative h-fit flex items-center">
          <input
            v-model="searchNumber"
            class="border rounded-md pl-10 text-sm h-9 w-48 focus:border-none focus:outline-[#f7c906] focus:ring-0"
            placeholder="Search msisdn..."
          />
          <MagnifyingGlassIcon class="absolute h-5 w-5 text-gray-400 left-3" />
        </div>
        <div>
          <button class="export inline-flex justify-center items-center" @click="download">
            <DocumentArrowUpIcon class="icon h-5 w-5" />
          </button>
        </div>
      </div>

      <div class="flex justify-end items-center gap-x-3">
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
        <p class="cursor-default">{{ props.totalPages }} rows</p>
      </div>
    </div>
    <div class="content-table w-full h-full overflow-y-auto">
      <table class="border">
        <thead>
          <tr class="bg-white font-semibold capitalize">
            <th>MSISDN</th>
            <th>payment mode</th>
            <th>subscriber status</th>
            <th>offer ID</th>
            <th>offer name</th>
            <th>primary flag</th>
            <th>offer status</th>
            <th>offer effect data</th>
            <th>Offer EXP date</th>
          </tr>
        </thead>
        <tbody v-if="filteredData.length > 0" class="tbody">
          <tr
            v-for="(item, i) in paginatedUser"
            :key="item.MSISDN"
            class="text-center"
            :class="i.valueOf % 2 == 0 ? 'bg-[#F7C906] bg-opacity-60' : ''"
          >
            <td>{{ item.MSISDN }}</td>
            <td>{{ item.PAYMENT_MODE }}</td>
            <td>{{ item.SUBSCRIBER_STATUS }}</td>
            <td>{{ item.OFFER_ID }}</td>
            <td class="tooltip max-w-72" :data-tip="item.OFFER_NAME">
              <p class="w-full truncate">
                {{ item.OFFER_NAME }}
              </p>
            </td>
            <td>{{ item.PRIMARY_FLAG }}</td>
            <td>{{ item.OFFER_STATUS }}</td>
            <td>{{ item.OFFER_EFFECT_DATE }}</td>
            <td>{{ item.OFFER_EXP_DATE }}</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="9" class="text-center py-16">
              <span class="inline-flex flex-col items-center">
                <InboxIcon class="h-10 w-10 text-gray-300" />
                No data available
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, defineProps, computed } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import { DocumentArrowUpIcon, InboxIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

import Export from '@/script/export-csv'

const { exportToCsv } = Export()
const searchNumber = ref('')

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

watch(
  () => props.dataValue,
  () => {
    currentPage.value = 1
  }
)

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
    name: '3000',
    value: 3000
  }
])

const currentPage = ref(1)

const pageSize = ref(100)

const totalPages = computed(() => Math.ceil(props.dataValue.length / pageSize.value))

const filteredData = computed(() => {
  if (!searchNumber.value) {
    return props.dataValue
  }
  return props.dataValue.filter((item) => item.MSISDN.toString().includes(searchNumber.value))
})

const paginatedUser = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize.value
  const endIndex = startIndex + pageSize.value
  return filteredData.value.slice(startIndex, endIndex)
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
  background-color: #f7cb063c;
}

.tbody tr td {
  padding: 0.5rem;
  cursor: pointer;
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
  content: 'Export CSV';
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

.export:hover::before {
  opacity: 1;
  z-index: 2;
}

.content-table::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

.content-table::-webkit-scrollbar-thumb {
  background-color: #777777;
  border-radius: 0.25rem;
}

.tooltip[data-tip]::before {
  white-space: nowrap;
  max-width: none;
}
</style>

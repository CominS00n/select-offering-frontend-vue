<template>
  <section>
    <h2>Subscriber Status</h2>
    <div>
      <span>
        <input type="checkbox" id="all" v-model="checkAll" @change="toggleCheckAll" />
        <label for="all">All</label>
      </span>
      <span v-for="item in selectList" :key="item.name">
        <input type="checkbox" :value="item.value" :id="item.name" v-model="checkItems" />
        <label :for="item.name">{{ item.name }}</label>
      </span>
    </div>
  </section>
</template>

<script setup>
import { ref, defineEmits, watch } from 'vue'

const emit = defineEmits('data-selected')

const selectList = ref([
  { name: 'Idle', value: 1 },
  { name: 'Active', value: 2 },
  { name: 'Call Barring', value: 3 },
  { name: 'Suspend', value: 4 },
  { name: 'Pool', value: 8 }
])

const checkItems = ref([])
const checkAll = ref(false)

const toggleCheckAll = () => {
  if (checkAll.value) {
    checkItems.value = selectList.value.map((item) => item.value)
  } else {
    checkItems.value = []
  }
}

watch(checkItems, (newValue) => {
  emit('data-selected', newValue)
})
</script>

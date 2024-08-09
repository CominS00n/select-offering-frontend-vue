<template>
  <header></header>
  <main>
    <muliComboBox @data-selected="handleOffer" />
    <subscriberPage />
    <button type="submit">Search</button>
    <section class="w-full overflow-x-auto">
      <table class="w-full">
        <tr>
          <th>MSISDN</th>
          <th>PAYMENT_MODE</th>
          <th>SUBSCRIBER_STATUS</th>
          <th>OFFER_ID</th>
          <th>OFFER_NAME</th>
          <th>PRIMARY_FLAG</th>
          <th>OFFER_STATUS</th>
          <th>OFFER_EFFECT_DATE</th>
          <th>OFFER_EXP_DATE</th>
        </tr>
      </table>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import muliComboBox from './components/muliComboBox.vue'
import subscriberPage from './components/subscriberPage.vue'

const selectOffer = ref(null)
function handleOffer(data) {
  selectOffer.value = data
}
</script>

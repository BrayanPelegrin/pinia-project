<template>
  <div class="w-100 d-flex justify-content-center">
    <div class="p-4 bg-white rounded shadow-sm" style="width: 250px">
      <h4 class="fw-bold text-center mb-3"><u>Counter Options</u></h4>
      <div class="d-flex justify-content-center">
        <button class="btn btn-light shadow-sm btn-sm col-4" @click="store.increment()">+</button>
        <div class="fw-bold text-center bg-tertiary mx-3 col-4">
          {{ store.count }} <sup> {{ store.squareCount }}</sup>
        </div>
        <button class="btn btn-light shadow-sm btn-sm col-4" @click="store.decrement">-</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConterOptionsStore, useLayoutStore } from '@/store'
import { onMounted } from 'vue'
const store = useConterOptionsStore()
const layout = useLayoutStore()
onMounted(() => {
  layout.setTitle('Options Store')
})
</script>

<style scoped>
.bg-tertiary {
  background-color: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity)) !important;
}
</style>

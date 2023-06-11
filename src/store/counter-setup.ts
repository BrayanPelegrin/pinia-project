import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const useCounterSetupStore = defineStore('counterSetupStore', () => {
  const count = ref<number>(0)
  const lastChange = ref<Date>()
  const increment = () => {
    count.value += 1
    lastChange.value = new Date()
  }
  const decrement = () => {
    count.value -= 1
    lastChange.value = new Date()
  }

  return {
    count,
    increment,
    decrement,
    squareCount: computed<number>(() => count.value * count.value)
  }
})
export default useCounterSetupStore

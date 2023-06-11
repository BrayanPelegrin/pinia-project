import { defineStore } from 'pinia'

interface IOptionsStore {
  count: number
  lastChanged?: Date
}

const useConterOptionsStore = defineStore('counterOptions', {
  state: () =>
    ({
      count: 0,
      lastChanged: undefined
    } as IOptionsStore),
  getters: {
    squareCount: (state) => state.count * state.count
  },
  actions: {
    incrementBy(value: number) {
      this.count += value
      this.lastChanged = new Date()
    },
    increment() {
      this.count += 1
      this.lastChanged = new Date()
    },
    decrement() {
      this.count -= 1
    }
  }
})
export default useConterOptionsStore

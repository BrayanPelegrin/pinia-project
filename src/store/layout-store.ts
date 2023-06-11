import { defineStore } from 'pinia'
import { ref } from 'vue'

const useLayoutStore = defineStore('layoutStore', () => {
  const navTitle = ref<string | undefined>()
  const setTitle = (title: string | undefined): void => {
    navTitle.value = title
  }

  return { navTitle, setTitle }
})
export default useLayoutStore

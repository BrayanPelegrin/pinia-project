import type { IClient } from '@/clients/interfaces/client'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const useClientStore = defineStore('clientStore', () => {
  const currentPage = ref<number>(1)
  const totalPages = ref<number>(5)
  const clients = ref<IClient[]>([])

  return {
    //States
    currentPage,
    totalPages,
    clients,
    //Actions
    setClients(newClients: IClient[]): void {
      clients.value = newClients
    },
    setPage(page: number): void {
      if (currentPage.value == page) return

      currentPage.value = page
    }
  }
})
export default useClientStore

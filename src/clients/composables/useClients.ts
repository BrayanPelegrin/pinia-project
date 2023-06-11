import ApiService from '@/api/ApiService'
import type { IClient } from '../interfaces/client'
import { useQuery } from '@tanstack/vue-query'
import useClientStore from '@/store/clientStore'
import { computed } from 'vue'



const getClients = async (): Promise<IClient[]> => {
  const { data } = await ApiService.get<IClient[]>('/clients?_page=1')
  return data
}

const useClients = () => {
  const store = useClientStore()
  
  const {isLoading}  = useQuery(['clientsPage=',1], getClients, {
    onSuccess: store.setClients
  })

  return {
    clientList: computed<IClient[]>(() => store.clients),
    isLoading
  }
}

export default useClients

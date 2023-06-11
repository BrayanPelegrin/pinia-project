import axios from 'axios'

const ApiService = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string
})

export default ApiService

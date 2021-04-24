import axios from 'axios';

// exp://192.168.88.250:19000

const api = axios.create({
  baseURL: 'http://192.168.88.250:3333'
})

export default api;
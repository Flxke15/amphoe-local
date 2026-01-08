import Axios from 'axios'

const axios = Axios.create({
  responseType: 'json',
  timeout: 60000
})

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access-token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { axios }
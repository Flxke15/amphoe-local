import { axios } from "../configuration"
const prefix = "/api"

export default {
  getListUsers() {
    return axios.get(`/api/users/getListUsers`)
  }
}
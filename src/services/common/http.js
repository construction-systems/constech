import axios from 'axios';
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies()

const opts = {
  baseURL: "https://constech-api.azurewebsites.net/api/v1",
  headers: {
    "Content-Type": "application/json",
  }
}
const user = cookies.get("currentUser")
if (user) 
  opts.headers.Authorization = `Bearer ${user.token}`


export default axios.create(opts);

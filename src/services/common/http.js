import axios from 'axios';

export default axios.create({
  baseURL: `${import.meta.env.VUE_APP_API_HOST}/api/v1`,
  headers: { 'Content-type': 'application/json' },
});

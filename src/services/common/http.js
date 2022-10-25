import axios from 'axios';

export default axios.create({
  baseURL: `${import.meta.env.VITE_API_HOST}/api/v1`,
  headers: { 'Content-type': 'application/json' },
});

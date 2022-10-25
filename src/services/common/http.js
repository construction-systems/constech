import axios from 'axios';

export default axios.create({
  baseURL: `https://constech-api.vercel.app/`,
  headers: { 'Content-type': 'application/json' },
});

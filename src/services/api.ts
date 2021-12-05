import axios from 'axios';

const api = axios.create({
  baseURL: "https://61acff91d228a9001703acbc.mockapi.io/"
});

export default api;
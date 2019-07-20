import axios from 'axios';

const api = axios.create({
  base: 'https://api.github.com/',
});

export default api;

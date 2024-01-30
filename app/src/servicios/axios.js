import axios from 'axios'

const instance_axios = axios.create({
    baseURL: import.meta.env.VITE_URL_BACKEND,
    timeout: 1000,
});

export default instance_axios;
import axios from "axios";

export const key = "405c08e2cc9512090ebc97b6f462a90a243be254";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;
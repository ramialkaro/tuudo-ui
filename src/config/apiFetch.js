
import axios from 'axios'
const ApiUrl = "http://127.0.0.1:8080"

const apiFetch = axios.create({
    baseURL:ApiUrl,
})

export default apiFetch
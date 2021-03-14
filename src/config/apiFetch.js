
import axios from 'axios'
const ApiUrl = "http://localhost:8080"

const apiFetch = axios.create({
    baseURL:ApiUrl,
})

export default apiFetch
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3000/"

const http = {
    get:axios.get,
    delete:axios.delete,
    put:axios.put,
    post:axios.post
}
export default http;
import axios from 'axios';

const instance = axios.create({
    baseURL : 'http://antoinemeresse.xyz:3000'
})

export default instance;
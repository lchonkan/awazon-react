import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clo-15d92.cloudfunctions.net/api',
});

export default instance;

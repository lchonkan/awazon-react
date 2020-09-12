import axios from 'axios';

const instance = axios.create({
    baseURL: '...', // the API call URL (cloud function)
});

export default instance;

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clo-15d92/us-central1/api', // the API call URL (cloud function)
});

export default instance;

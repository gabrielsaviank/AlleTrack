// Import Axios to make our life easier with http requests
import axios from 'axios';
import AsyncStorage from "@react-native-community/async-storage";

const instance =  axios.create({
    baseURL: 'http://02a3e10a14b3.ngrok.io'
});

// After 1:30 hours the Ngrok expire and it's necessary to restart the server again

instance.interceptors.request.use(
    // Here we can modify the request that we're making, but we'll attach our token
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token){ 
            config.headers.Authorization = `Bearer ${token}` ;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default instance
import axios from 'axios';
export default axios.create({
    baseURL: 'http://8cbc408b86ec.ngrok.io'
});

// After eight hours the Ngrok expire and it's necessary to restart the server again
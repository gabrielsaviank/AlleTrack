// Import Axios to make our life easier with http requests
import axios from 'axios';
export default axios.create({
    baseURL: 'http://7c1ffeb23c34.ngrok.io'
});

// After eight hours the Ngrok expire and it's necessary to restart the server again
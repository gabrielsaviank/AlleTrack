// Import Axios to make our life easier with http requests
import axios from 'axios';
export default axios.create({
    baseURL: 'http://8ecaa4985f8e.ngrok.io'
});

// After 1:30 hours the Ngrok expire and it's necessary to restart the server again
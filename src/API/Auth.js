import axios from 'axios'; 


// Define your api url from any source.
// Pulling from your .env file when on the server or from localhost when locally
const BASE_URL = 'https://hammerhead-app-w9mzn.ondigitalocean.app/buzly-university-web-app-backen2'; 

export const loginAPI = (email, password) => { 
  return axios 
    .post(`${BASE_URL}/v1/users2/aws/login`,
        {
            "email": email,
            "password": password
        }
    ) 
}; 
export const testAPI = (username, password) => {
    return axios 
        .post(`https://hammerhead-app-w9mzn.ondigitalocean.app/buzly-university-web-app-backen2/v1/users2/aws/login`) 
}
const axios = require('axios');
// const fs = require('fs');
const FormData = require('form-data');

export const chatData =() =>{
    const BASE_URL = 'https://ashva.pythonanywhere.com/upload';
const filepath = "/Users/bhoshaga/Downloads/ret.jpeg";

const data = {
    user_message: 'can you build a 3D model?',
};

const formData = new FormData();
// formData.append('file', fs.createReadStream(filepath));

axios.post(BASE_URL, formData, {
    headers: {
        ...formData.getHeaders(),
    },
    data: data,
})
    .then(response => {
        const resp = response.data;
        // console.log(resp);   // Full response by server, dictionary with keys: status, message, status_code, server_response, filename
        
        console.log(resp.message);  // this is the AI chatbot response
        console.log(resp.server_response); // three js model provided by server, this is what we want
  })
    
    .catch(error => {
        console.error(error);
    });
}
const axios = require('axios');

const api = {
    getUser(username) {
        const queryURL = `https://api.github.com/users/${username}`;
        axios.get(queryURL)
            .then(response => {
                console.log(response.data);
            })
        
            
            
    }
};

module.exports = api;
import axios from 'axios';

const http = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

const list = () => {
    return http.get('/')
        .then(response => response.data)
    
} 
console.log(list)

export default {
    list
}
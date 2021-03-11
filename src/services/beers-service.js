import React from 'react'
import axios from 'axios';


const http = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

const list = () => {
    return http.get('/')
        .then(response => response.data)       
} 


/*const singleBeer = () => {    
    return http.get(`/${this.props.match.params.id}`)
        .then(response => response.data)       
}*/






export default {
    list, 
}
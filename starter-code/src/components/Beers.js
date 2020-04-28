import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const STATUS= {
    LOADING:'',
    LOADED:'',
    ERROR:''
}

class Beers extends Component{
    constructor(){
        super()
        this.state = {
            beers: [],
            status: '',
        }
    }


}

export default Beers;
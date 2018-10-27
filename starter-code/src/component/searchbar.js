import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    handleChange = (e) => {
        console.log(e.target.value)
        const searching = e.target.value
        this.setState({search : searching})
        axios.get(`https://ironbeer-api.herokuapp.com/beers/search?q=${this.state.search}`)
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.search} onChange={(e) => this.handleChange(e)} placeholder="What do you want"></input>
            </div>
        )
    }
}

export default SearchBar;
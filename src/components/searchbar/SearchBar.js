import React, { Component } from 'react';
import axios from 'axios';

export default class SearchBar extends Component {
    state = {
        inputValue: '',
    }

    searchHandler = event => {
        const { name, value } = event.target;
        console.log(name, value);
        this.setState(
            {
            [name]: value
            }, 
        () => {
            if (this.state.inputValue.length === 0){
                this.props.onChangeSearchHandler(this.props.beers)
            } else {
                const query = this.state.inputValue;
                return axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
                .then(results =>{
                    return results.data
                }).catch(err => console.log(err))
            }
        })
    }

    render() {
        return (
            <div>
                <label> Search our beers:
                <input 
                name="inputValue"
                value={this.state.inputValue}
                onChange={this.searchHandler}
                />
                </label>
            </div>
        )
    }
}

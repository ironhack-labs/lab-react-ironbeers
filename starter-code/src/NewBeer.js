import React, { Component } from 'react';
import Axios from 'axios';

class NewBeer extends Component {

    //new
    state = {
        name: ''
    }

    setBeer = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    sendBeerToApi = (e) => {
        e.preventDefault();
        Axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {name:this.state.name})
            .then(res=>{
                console.log(res)
            })
    }

    render() {
        return (
            <div>
                NewBeer
                <form onSubmit={this.sendBeerToApi}>
                    <input type="text" name="name" onChange={this.setBeer}/>
                    <input type="submit" value="add a beer"/>
                </form>
            </div>
        );
    }
}

export default NewBeer;
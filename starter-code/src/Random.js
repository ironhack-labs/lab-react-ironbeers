import React, { Component } from 'react';
import axios from 'axios';

class Random extends Component {

    state ={
        randomBeer:{}
    } 

    componentDidMount() {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(randomBeer=>{
                console.log(randomBeer)
                this.setState({
                    randomBeer:randomBeer.data
                })
            })
    }


    render() {
        console.log(this)
        return (
            <div>
                
                Random
                {this.state.randomBeer.name}
                {this.props.match.params.beerId}
                <img src={this.state.randomBeer.message} />
                {this.state.randomBeer.name}
            </div>
        );
    }
}

export default Random;
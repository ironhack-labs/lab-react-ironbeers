import React, { Component } from 'react'
import axios from 'axios';


export default class Details extends Component {
    state = {
        beer : []
    }


    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            this.setState({
                beer : response.data
            });
        })
    }
    
    render() {  

        const singleBeer = this.props.match.param.id;
        const getBeer = this.state.beer.find(beer =>{
            return beer.id === singleBeer;
        })
        
        return (
            <div>
                
            </div>
        )
    }
}


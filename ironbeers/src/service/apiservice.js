import React, { Component } from 'react';


import axios from 'axios';

class Apiservice extends Component {

    constructor(){
        super()
        this.state = {
           beers: []
        }
    }

    componentDidMount() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/all")
        .then(response => {
            console.log(response)
            this.setState({beers: response.data})
          
        })
    }

    render() {
        return (

            <div className="beers">
                {this.state.beers.map(beer =>(
                    <div key={beer._id}>
                <h1>{beer.name}</h1>
                <p>{beer.tagline}</p>
                <p>{beer.description}</p>
                <img src={beer.image_url}/>
                
                </div>))
                   
                    }


            </div>
        );
    }
}

export default Apiservice

//----------------------------------


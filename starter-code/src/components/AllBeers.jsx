import React, { Component } from 'react'
import axios from "axios"
import Beers from "./Beers"

class AllBeers extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 beers:[]
        }
    }
   componentDidMount() {
    axios.get("https://ih-beers-api.herokuapp.com/beers")
    .then(response => {
        this.setState({beers: response.data})
    })
}

    render() {
        return (
            <div>
                {this.state.beers.map((beer,key)=>{
                    return <Beers key={key} 
                    image={beer.image_url}
                    attenuation_level={beer.attenuation_level}
                    first_brewed={beer.first_brewed}
                    tagline={beer.tagline}
                    name={beer.name} 
                    id={beer._id}/>
                })}
            </div>
        )
    }
}

export default AllBeers

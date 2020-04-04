import React from 'react'
import Navbar from "./Navbar"
import axios from "axios"
import Beerbox from "./Beerbox"


class Allbeers extends React.Component {    
    constructor() {
        super()

        this.state = {
            beers: []   
        }
    }

    componentDidMount() {
        axios.get("https://ih-beers-api.herokuapp.com/beers")
        .then(response => {
            let beersData = response.data
            this.setState({beers: beersData})
            console.log(this.state.beers)
        })
        .catch(err => console.log("Charles made a mistake", err))
    }

    render() {
        return (
            <div className="allbeers">
                <div className="navbarstandard">        
                    <Navbar/>
                </div>

                <div className="beerboxes">
                    
                        {this.state.beers.map(beer => (
                                <Beerbox key={beer._id} id={beer._id} image={beer.image_url} name={beer.name} tagline={beer.tagline} contri={beer.contributed_by} />
                        ))}
                </div>   
            </div>
        )
    }
}

export default Allbeers
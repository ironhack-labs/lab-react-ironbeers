import React from "react"
import axios from "axios"
import NavBar from "./NavBar"
import{Link} from "react-router-dom"

class Random extends React.Component {
    state = {
        beer: null
    }

getBeerRandomDetail() {
    console.log("GET BEER DETAIL");
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
    .then(response => {
        const randomBeer = response.data;

        this.setState({
            beer: randomBeer
        })
    })
.catch(err => {
    console.log(err);
});
}

componentDidMount() {
    this.getBeerRandomDetail();
}


    render() {
if(this.state.beer === null) {
    return <div />
}

        const beer = this.state.beer;

        
        return (
            <div>
            <NavBar />
            <div>
                <img src={beer.image_url} alt="beer" height="200vh"/>
                </div>
                <div>
                    <h1>{beer.name}</h1>
                    <div>
                    <h3>{beer.tagline}</h3>
                    <p>{beer.first_brewed}</p>
                    </div>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </div>
                <Link to="/Beers">Back to the List of Beers</Link>
            </div>
        )
    }
}

export default Random;
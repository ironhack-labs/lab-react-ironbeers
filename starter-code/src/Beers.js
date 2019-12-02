import React from "react";
import NavBar from "./NavBar";
import axios from "axios";
import {Link} from "react-router-dom";

class Beers extends React.Component {
state = {
    beers: []
};

componentDidMount() {
    console.log("DID MOUNT")
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then(response => {
        console.log(response);
        this.setState({
            beers: response.data
        });
    })
        .catch(err => {
            console.log(err)  
    });
}


    render() {
        console.log("RENDER", this.state);
        return (
            <div>
            <NavBar />
            <div>
                {this.state.beers.map(beer => {
                    console.log(beer._id)
                    return (
                        <div  key={beer._id}>
                        <Link to={`/beers/${beer._id}`}>
                        <div>
                            <img src={beer.image_url} alt="beer" height="150vh"/>
                        </div>
                        <div>
                            <h2>{beer.name}</h2>
                            <p>{beer.tagline}</p>
                        <p>Created by: {beer.name}</p>
                        </div>
                        </Link>
                        </div>
                    )
                })}
            </div>
            </div>
        )
    }
}

export default Beers
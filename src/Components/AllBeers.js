import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";


class BeerList extends React.Component {
    state = {
        beers: []

    };

 getResponseFromApi = async()=> {
const {data} = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
this.setState({ beers: data });
console.log(data)
   }

    componentDidMount() {
        this.getResponseFromApi()

    }
    render() {
        return (
            <div>
                <Header />
                <ul>
                    <h1> All beers:</h1>
                    {this.state.beers.map((beer, index) =>
                        <li>
                            <Link
                                key={index}
                                to={`beers/${beer._id}`}>
                                <img src={beer.image_url} alt="beerpic" style={{ width: "10px" }} />

                            </Link>
                            <strong> {beer.name} </strong>
                            <br></br>
                            {beer.description}
                            <br></br>
                            {beer.contributed_by}
                            <br></br>
                            {beer.tagline}

                        </li>)}
                </ul>
            </div>
        )
    }
}

export default BeerList;
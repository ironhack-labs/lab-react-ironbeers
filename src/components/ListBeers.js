

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//page where you should display all the beers

class ListBeers extends React.Component {
    state = {
        beers: [],
    };

    async componentDidMount() {
        // 1. Make the call to the API
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
        console.log(response.data);
        // 2. Wait for the response from the API
        // 3. Set the state with the response
        this.setState({
            beers: response.data,
        });
    }

    render() {
        return(
            <div>
                <h2>Beer list</h2>
                {this.state.beers.map((element) => {
                    return (
                        <section className="horizontal-listbeer-align">
                        <img className="list-beer-img" src={element.image_url} alt="images-of-specific-beer" />
                        <div className="vert-listbeer-text-align">
                        <Link to={`/all-the-beers/${element._id}`}>{element.name}</Link>
                        <p>{element.tagline}</p>
                        <p>ABV: {element.abv}</p>
                        <p>IBU: {element.ibu}</p>
                        {/* <Link to={`/country/${element.alpha3Code}`}>{element.name}</Link> */}
                        </div>
                        </section>
                    );
                })}
            </div>
        );
    }
}

export default ListBeers;
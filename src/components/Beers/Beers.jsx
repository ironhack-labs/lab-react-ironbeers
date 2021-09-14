import React from "react";
import "./Beers.css";
import Header from "../Header/Header"
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class Beers extends React.Component{
    state = {
        beerList: []
    }

    getBeers() {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
                .then((res) => {
                    this.setState({ beerList: [...res.data]});
                })
          .catch(() => {
            console.log("Error");
        });
    }

    componentDidMount() {
        this.getBeers()
    }

    render(){
        return(
            <div className="BeerList">
                <Header/>
                {this.state.beerList.length > 0 ? (
                    this.state.beerList.map((beer)=>{
                        return(
                            <div key={beer._id}>
                                <NavLink to={`/beers/${beer._id}`} className="BeerList__NavLink">
                                    <div className="BeerList__Beercard">
                                        <div>
                                            <img src={beer.image_url} className="BeerList__Beercard__image"></img>
                                        </div>
                                        <div className="BeerList__Beercard__content">
                                            <h2>{beer.name}</h2>
                                            <p>{beer.tagline}</p>
                                            <p>{beer.contributed_by}</p>
                                        </div>
                                    </div>
                                </NavLink>
                                <hr></hr>
                            </div>
                        )
                    })
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        )
    }
}
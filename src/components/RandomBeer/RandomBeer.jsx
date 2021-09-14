import React from "react"
import "./RandomBeer.css"
import Header from "../Header/Header"
import axios from "axios";

export default class RandomBeer extends React.Component{
    state = {
        randomBeer: {},
        loaded: false,
      };
    
      componentDidMount() {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
          .then((response) => {
            this.setState({ randomBeer: response.data , loaded: true}); 
            console.log(this.state.randomBeer)           
        });
      }

    render(){
        const {image_url,name,tagline,first_brewed,attenuation_level,description,contributed_by} = this.state.randomBeer;

        return(
            <div className="RandomBeer">
                <Header/>
                { this.state.loaded ? (
                <div className="RandomBeer__card">
                    <img src={image_url} className="RandomBeer__card__img"></img>
                    <div className="RandomBeer__card__data">
                        <div className="RandomBeer__card__data__row">
                            <h2>{name}</h2>
                            <h5>{attenuation_level}</h5>
                        </div>
                        <div className="RandomBeer__card__data__row">
                            <h4>{tagline}</h4>
                            <h5>{first_brewed}</h5>
                        </div>
                    </div>
                    <p>{description}</p>
                    <h4>{contributed_by}</h4>
                </div>
                ) : (
                    <div>Loading...</div>
                )
                }
            </div>
        )
    }
}
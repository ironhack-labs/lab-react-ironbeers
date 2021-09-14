import React from "react"
import "./BeerInfo.css"
import Header from "../Header/Header"
import axios from "axios";

export default class BeerInfo extends React.Component{
    state = {
        beer: {},
        loaded: false,
      };
    
      componentDidMount() {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`)
          .then((response) => {
            this.setState({ beer: response.data ,loaded : false});
          });
      }

    render(){
        const {image_url,name,tagline,first_brewed,attenuation_level,description,contributed_by} = this.state.beer;

        return(
            <div className="BeerInfo">          
                <Header/>
                {this.state.loaded ?(
                <div className="BeerInfo__card">
                    <img src={image_url} className="BeerInfo__card__img"></img>
                    <div className="BeerInfo__card__data">
                        <div className="BeerInfo__card__data__row">
                            <h2>{name}</h2>
                            <h5>{attenuation_level}</h5>
                        </div>
                        <div className="BeerInfo__card__data__row">
                            <h4>{tagline}</h4>
                            <h5>{first_brewed}</h5>
                        </div>
                    </div>
                    <p>{description}</p>
                    <h4>{contributed_by}</h4>
                </div>
                ) : (
                    <div>Loading..</div>
                )}
            </div>
        )
    }
}
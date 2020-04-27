import React from 'react';
import "./styles.css";
import { Link } from "react-router-dom";

class Beer extends React.Component {

    render(){
        const { beer } = this.props;
        console.log(beer._id)
        return (
            <div className="beer">
                <div className="imgBeer">
                    <Link to={beer._id}> <img className="img" src={beer.image_url} alt={beer.name} /> </Link>               
                </div>
                <div className="data">
                    <h5> {beer.name} </h5>
                    <h6> {beer.tagline} </h6>
                    <p> {beer.contributed_by} </p>
                </div>
            </div>
        )
    }
}

export default Beer;
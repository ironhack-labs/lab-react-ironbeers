import React from 'react';
import "./styles.css";

class Beer extends React.Component {

    render(){
        const { beer } = this.props;
        return (
            <div className="beer">
                <div className="imgBeer">
                    <img className="img" src={beer.image_url} alt={beer.name} />
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
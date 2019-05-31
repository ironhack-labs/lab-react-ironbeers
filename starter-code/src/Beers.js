import React from 'react';
import Header from './Header';


const Beers = (props) => {
    const list = props.beers.map((beer, i) => (
        <div className="beer-body">
            <img className="beer-img" src={beer.image_url} />
            <h5 className="beer-name">{beer.name}</h5>
            <p className="beer-tagline">{beer.tagline}</p>
            <p className="beer-description">{beer.description}</p>
        </div>
    )) 

        const { beer } = this.props

        return (
            <div className="Beers">
                <Header />
                {list}
            </div>
        )
}
    

export default Beers
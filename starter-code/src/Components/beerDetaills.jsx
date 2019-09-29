import React, { Component } from 'react';

class Details extends Component {

    getBeerInfo = () => {
        const { beers } = this.props
        const { id } = this.props.match.params
        let beer = beers.find(beer => beer._id === id)
        return beer
    }

    render() {
        let beer = this.getBeerInfo()
        console.log(beer)
        return (
            <div>
                {beer &&
                    <div className="card" >
                        <img src={beer.image_url} alt="beer image" style={{
                            height: "180px",
                            width: "80px"
                        }} />
                        <div className="card-body">
                            <h5>
                                {beer.name}
                            </h5>
                            <div className="card-text">
                                <p>
                                    {beer.tagline}
                                </p>
                                <p>
                                    {beer.description}
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Details;
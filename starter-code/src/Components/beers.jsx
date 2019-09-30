import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Beers extends Component {

    renderBeers = () => {
        const { beers } = this.props

        return beers.map(b => {
            return (

                <div className="container">

                    <div className="card">
                        <img src={b.image_url} alt="beer image" style={{
                            height: "180px",
                            width: "80px"
                        }} />
                        <div className="card-body" >
                            <h5 className="card-title" >
                                {b.name}
                            </h5>
                            <p className="card-text">
                                {b.description}
                            </p>
                            <Link to={`item/${b._id}`}  >Further Details</Link>
                        </div>
                    </div>
                </div>
            )
        })
    }


    render() {
        return (
            <div>
                {this.renderBeers()}
            </div>
        );
    }
}

export default Beers;
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


class BeerBox extends Component {
    render() {
        return (
            <Fragment>
                {this.props.beers.map((beer, i) => {
                    return (
                        <div className="container-fluid text-center">
                            <div className="container">
                                <div className="col-md-12 text-center">
                                    <div className="card text-center">
                                        <h5 className="card-header text-center">
                                            <img src={beer.image_url} alt="img" style={{ height: 200 }} />
                                        </h5>
                                        <div className="card-body">
                                            <p className="card-text">
                                                <Link to={`/beers/${beer._id}`}>
                                                    <p className="blueLink">MORE INFO</p>
                                                </Link>
                                            </p><h3>{beer.name}</h3>
                                            <span>{beer.tagline}</span><br /><br />
                                            <p />
                                        </div>
                                        <div className="card-footer">
                                            <span>Created by: {beer.contributed_by}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Fragment>
        );
    }
}

export default BeerBox;




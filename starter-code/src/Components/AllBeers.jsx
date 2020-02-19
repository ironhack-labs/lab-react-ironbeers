import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AllBeers extends Component {

    showBeers = () => {
        let allBeers = [...this.props.beers]
        return allBeers.map(eachBeer => {
            return (
            <React.Fragment>
                <Link to={`/beers/${eachBeer._id}`} style={{ textDecoration: 'none', color: '#000000', }} >
                    <div className="beerDiv">
                        <div className="beerImg">
                            <img src= {eachBeer.image_url} height="250vh" alt=""/>
                        </div>
                        <div className="beerStuff">
                            <h4>{eachBeer.name}</h4>
                            <h6><i>{eachBeer.tagline}</i></h6>
                            <p><b>Created by: </b>{eachBeer.contributed_by.slice(0,10)}</p>
                        </div>
                    </div>
                    <hr></hr>
                </Link>
            </React.Fragment>
            )

        })
    }

    render() {
        
        return (
            <div>

                
                <nav className="navbar navbar-light">
                    <Link className="navbar-brand" to="/"><img src={"/images/logo.svg"} width="40" height="40" alt=""/></Link>
                </nav>
                <div>
                    {this.showBeers()}
                </div>

            </div>
        );
    }
}

export default AllBeers;




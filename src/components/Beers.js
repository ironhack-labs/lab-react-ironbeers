import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

class Beers extends React.Component {
    render() {
        return (
            <div className='beers-container'>
            <Nav/>
                {this.props.beers.map((beer) => {
                    return (
                      <Link to={`/beers/${beer._id}`}>
                        <div className="beers-single-container">
                          <div>
                            <img src={beer.image_url} alt='beer'/>
                          </div>
                          <div>
                            <h3>{beer.name}</h3>
                            <h4>{beer.tagline}</h4>
                            <p>{beer.contributed_by}</p>
                          </div>
                        </div>
                      </Link>
                    );
                })}
            </div>
        )
    }
}

export default Beers
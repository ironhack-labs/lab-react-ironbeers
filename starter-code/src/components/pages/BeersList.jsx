import React, { Component } from 'react';
import { loadBeersList } from './../../services/beersApi';
import Navbar from "../Navbar"
import "./Styles.css"
import { Link } from 'react-router-dom';


export class BeersList extends Component {
  constructor() {
		super();
		this.state = {
			beers: []
		};
	}

	componentDidMount() {
		loadBeersList()
			.then(beers => {
				this.setState({
					beers
				});
			})
			.catch(error => {
				console.log(error);
				console.log('Error in service.');
			});
	}

    render() {
 
        return (
            <div>
            <Navbar/>
                {this.state.beers.map(beer => (
                  <Link to={`/beers/${beer._id}`}>
                     <div className="box columns is-vcentered is-centered has-margin-top-10 has-margin-bottom-10 has-margin-left-100 has-margin-right-100">
                        <div className="column is-2">
                          <img src={beer.image_url} alt="" className="image-height"/>  
                        </div>
                        <div className="column is-5 has-text-left">
                          <h1 className="is-size-3 has-text-black">{beer.name}</h1>
                          <h2 className="is-size-4 has-text-grey-light">{beer.tagline}</h2>
                          <p className="is-size-7 has-text-black"><b>Created by:</b> {beer.contributed_by}</p> 
                        </div>
                     </div>
                  </Link>
))
}
            </div>
            
        );
    }
}

export default BeersList;

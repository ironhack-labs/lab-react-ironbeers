import React, { Component } from 'react'
import Header from '../Header/Header';
import BeerService from "../beerService/BeerService"
import "./Allbeers.css"
import { Link } from 'react-router-dom';






export default class AllBeers extends Component {
  constructor(props){
    super(props)
    this.state={
      beer:[],
      
}
    this.BeerService = new BeerService();
    this.getBeer();
  }

  
  getBeer = () =>{
    this.BeerService.getBeer()
    .then(beer=>{
      console.log(beer)
      
   
   
      this.setState({...this.state,beer:beer})
    })
    .catch(err=>console.log(err))
  }
    
  render() {
		return this.state.beer ? (
			<div>
				<Header />

				{this.state.beer.map((beer) => (
					<Link className="all-beers" to={`/beers/${beer._id}`} key={beer._id}>
						<div>
							<img src={beer.image_url} alt="beer" />
						</div>
						<div className="beer-text">
							{beer.name}
							{beer.tagline}
							<div>
								<p>Created by: {beer.contributed_by}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		) : (
			<p>Loading</p>
		);
	}
  }
          
      
      
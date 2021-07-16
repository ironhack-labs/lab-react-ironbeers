import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search'

class BeersList extends React.Component{
    state={
        beers:[],
        filteredBeers: []
    }
    async componentDidMount(){
        const beersList = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
        console.log(beersList.data)
        this.setState({
            beers:beersList.data,
            filteredBeers: beersList.data
        })
    }
    
    handleFilterBeer = (query) => {
        this.setState((previousState) => {
          return {
            filteredBeers: previousState.beers.filter((beer) => {
              return beer.name.toLowerCase().includes(query.toLowerCase());
            }),
          };    
        });
      };


    render(){
        const {filteredBeers} = this.state
        return(
            <>
            <Search filterBeers = {this.handleFilterBeer}/>
            {filteredBeers.map((beer)=>{
                return (
                    <div key ={beer._id}>
                        <img src={beer.image_url} alt={beer.name} />
                        <NavLink to={`/beer-details/${beer._id}`}><h3>{beer.name}</h3></NavLink>
                        <h4>{beer.tagline}</h4>
                        <p>Created By: {beer.contributed_by}</p>
                    </div>
                )
            })}
            </>
        )
    }

}
export default BeersList
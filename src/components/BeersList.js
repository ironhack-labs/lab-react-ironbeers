import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'

class BeersList extends React.Component{
    state={
        beers:[]
    }
    async componentDidMount(){
        const beersList = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
        console.log(beersList.data)
        this.setState({
            beers:beersList.data
        })
    }


    render(){
        const {beers} = this.state
        return(
            <>
            {this.state.beers.map((beer)=>{
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
import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'
export default class BeerList extends Component {
state = {
  beers: [],
  moreBeers:[]
}

componentDidMount(){
axios
.get('https://ih-beer-api.herokuapp.com/beers')
.then(({data})=>{
    this.setState({beers: data.slice(0,2) , moreBeers: data.slice(0,2)})
})
.catch(err=>{
    console.log(err)
})

}

searchBeer = (beer) => {

    let newArray = [...this.state.beers]
   
    let search = newArray.filter((e) => {
      return e.name.toLowerCase().indexOf(beer.toLowerCase()) !== -1;
    })

    this.setState({ beers: beer ? search : this.state.moreBeers })
  }

  handleChange = (e) => {
    let value = e.target.value
    this.searchBeer(value)    
    console.log(value)
  }
    render() {
    const {beers} = this.state
    
        return (
            <div>
              <NavBar/>
              <input type="text" placeholder="Search" onChange={this.handleChange} />
            
            { beers.map((beer, i) =>{
                return(
                   <Link  key={i} to ={`/beers/${beer._id}`} > <div>
                     <img  src= {beer.image_url} alt="beerImage"/> 
                     <h3 >{beer.name}</h3>
                     <p>{beer.tagline} </p>
                          <small>{beer.contributed_by}</small>   
                     </div> 
                     </Link>
                    )

            })
            }
            </div>  
        )
    }
}

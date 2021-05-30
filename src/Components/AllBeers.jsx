import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Header from './Header'

 class AllBeers extends Component {
constructor(props){
    super(props);

    this.state={
        beers: []
    }
}
componentDidMount(){
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then((res)=>{
        this.setState({ beers : res.data})
    })
    .catch((err)=> console.log(err))
}


    render() {
        return (
            <div>
                <Header/>
             <h1>AllBeer Page</h1>   

             <div>
                 {this.state.beers.map((beer ,index)=>{
                     return(
                         <div key={index} >
                             <hr />
                             <h2>{beer.name}</h2>
                             <img style={{width:'10%'}} src={beer.image_url} alt={beer.name} />
                             <p>Tagline : {beer.tagline}</p>
                             <p> Contribute by : {beer.contributed_by}</p>
                             <Link exact to ={`/beer-details/${beer._id}`}>See More Info</Link>
                             <hr />
                         </div>
                     )
                 })}
             </div>
            </div>
        )
    }
}
export default AllBeers
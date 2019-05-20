import React from 'react'
import Navbar from './Navbar'
import Axios from 'axios';
import {  Link } from 'react-router-dom';

let time;

class Beers extends React.Component{
  state={
    allBeers:[],
    loading: true
  }
  
  
    // componentDidMount(){
    //   Axios.get(`https://ih-beer-api.herokuapp.com/beers`).then(allBeers=>
    //   this.setState({allBeers:allBeers.data})
    //   )
    // }

  async componentDidMount(){
    let allBeers = await Axios.get ('https://ih-beer-api.herokuapp.com/beers')
    this.setState({
    allBeers:allBeers.data,
    loading:false
    })
  }

    showBeers=()=>{
      return this.state.allBeers.map((eachBeer, i)=>{
        return<div>
          <Link key={i} 
          to={`/eachbeer/${eachBeer._id}`} 
          className="list-group-item list-group-item-action">
          <img src = {eachBeer.image_url} width='30px' alt='beer'></img>
          
          <h3>{eachBeer.name} </h3>
          <li>{eachBeer.tagline}</li>
          <li>Contributed by: {eachBeer.contributed_by}</li>
          </Link>
      </div>
      })
    }

    searchBeers = (e) => {
      let query = e.target.value
      clearTimeout(time)
      time = setTimeout(()=>{
          Axios.get(`https://ih-beer-api.herokuapp.com/beers/search?q=${query}`)
          .then(result=>{
              this.setState({
                  allBeers:result.data
              })
          })
      },1000)


  }

  render(){
    return(
<div>
<Navbar />


<input type="text" onChange={this.searchBeers} placeholder="search....."/>
<div className="list-group">
{this.showBeers()}
</div>
</div>

    )
  }
}
export default Beers
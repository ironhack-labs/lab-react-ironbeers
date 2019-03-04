import React, {Component} from 'react';
import {Link} from "react-router-dom"
import axios from "axios"

class AllBeers extends Component {

  state = {
    beers: [],
    searchQuery: ""
  }

  componentDidMount(){
    
    axios.get("https://ironbeer-api.herokuapp.com/beers/all").then(response => {
      this.setState({
        beers: response.data
      })
    })
  }

  searchQueryHandler = (e) => {

    let searchedFor = e.target.value

    axios.get(`https://ironbeer-api.herokuapp.com/beers/search?q=${searchedFor}`).then(response => {

      this.setState({
        beers: response.data,
        searchQuery: searchedFor
      })

      
    }).catch(err => console.log(err))

   
  }


  render() { 

    return (<div>
    
    {/*LINK TO HOME*/}
    <Link to="/">Home</Link><br /><br />

    <form>
      <label>Search: </label>
      <input onChange={(e) => this.searchQueryHandler(e)}></input>
    </form><br /><br />

     {this.state.beers.map((e,idx) => {
    return (<div key={idx} className="beerBox"> 
    <img src={e.image_url} width="3%" alt={e.name}/>
    <Link to={`beers/${e._id}`}>{e.name}</Link> - {e.tagline}
    </div>)
    })
   }


    </div> 

    )
}
  
}



export default AllBeers;

import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Beers extends React.Component {

state = {
    beers: [],
    search: '',
}

componentDidMount () {
    this.getAllBeers()
}

getAllBeers = async () => {
    try {
   let beerData =  await axios.get('https://ih-beers-api2.herokuapp.com/beers')
            this.setState({
            beers: beerData.data
        })
    } catch (error) {
        console.log(error);
    }
}

// handleSearch = async (event) => {
//     const { value } = event.target;
//     let search = value
//    let beerData = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q={${search}}`)
//    this.setState({
//     beers: beerData.data
// })
//   };
 

    render(){
        return (
        <div>
        <Link to="/">Back HomePage</Link>
        <h3>Search:</h3> 
        {/* <input
          className="input"
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={(e) => this.handleSearch(e)}
        /> */}
            <h1>Beers:</h1>
            {this.state.beers.map((beer)=>{
                return (
                  <div key={beer._id}>
                    <img width="5%" src={beer.image_url} />
                    <p>Name: {beer.name}</p>
                    <p>Tagline: {beer.tagline}</p>
                    <p>Contributed by: {beer.contributed_by}</p>
                    <Link to={`/BeerDetails/${beer._id}`}>See this Beer Details</Link>
                  </div>
                );
            })}

        </div>
    )
}
 
}


export default Beers
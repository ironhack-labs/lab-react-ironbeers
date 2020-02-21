import React, { Component } from 'react'
import HeaderHome from '../components/HeaderHome'
import apiHandler from "./../api/api";
import { Link } from 'react-router-dom';

const api = new apiHandler();

export default class Beers extends Component {
    state = {
    beersToDisplay: [],
    search: ""
  };

  handleSearch = e => {
    this.setState({search : e.target.value}, ()=>{
        console.log('search =', this.state.search)
    api.get("/beers/search?q="+this.state.search)
      .then(apiRes => {this.setState({ beersToDisplay: apiRes.data });
        console.log(apiRes.data)})
      .catch(apiErr => console.error(apiErr));
    })
  }

  componentDidMount() {
    api
      .get("/beers")
      .then(apiRes => {this.setState({beersToDisplay: apiRes.data});
    console.log(apiRes.data)})
      .catch(apiErr => console.error(apiErr));
  }
//   componentDidUpdate(){
//       api.get("/beers/search?q="+this.state.search)
//       .then(apiRes => {this.setState({ beersToDisplay: apiRes.data });
//         console.log(apiRes.data)})
//       .catch(apiErr => console.error(apiErr));
//   }
    render() {
    const {beersToDisplay} = this.state
        return (
            <div>
                <HeaderHome/>
                <input onChange={this.handleSearch}type="text" name="search" placeholder="search"/>
                {beersToDisplay.length ?
                beersToDisplay.map((beer,i)=>(
                    <div key={i}>
                        <Link to={`/beers/${beer._id}`}>
                            <img width="30"  src={beer.image_url} alt=""/>
                            <h2>{beer.name}</h2>
                            <h3>{beer.tagline}</h3>
                            <p><b>Created by :</b> {beer.contributed_by}</p>
                            <hr/>
                        </Link>
                    </div> 
                )) : <p>No beer yet! <Link to='/newbeer'>Add One</Link></p>}
            </div>
        )
    }
}

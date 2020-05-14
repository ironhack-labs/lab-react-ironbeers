import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import BeerListFetch from '../BeerApi'

export default class NavBar extends Component {

state = {search:''}

handleSearch(e) {
console.log(e.target.value)
this.setState({search:e.target.value})
BeerListFetch.searchBeer(this.state.search)
.then(data => console.log(data.data))
.catch(err => console.log(err))
}


   

    

    render() {
        return (
            <div>
            <div><Link to='/'>Home</Link></div>
                <input value={this.state.search} onChange={(e) => this.handleSearch(e)}></input>
            </div>
        )
    }
}

import React, {Component} from 'react'
import {Link} from 'react-dom'
import axios from 'axios'

class AllBeers extends Component {

    constructor(){
        super()
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get("http://206.189.7.127/countries/")
        .then(response => {
            this.setState({beers: response.data})
        })
    }

    render() {
        return (
            <div className="App">
                {this.state.beers.map(beer => (
               <div key={beer._id}>
                   <h1>{beer.name}</h1>
                   <p>{beer.tagline}</p>
                   <p>{beer.contributed_by}</p>
                   <Link to={`/beer/${beer._id}`} ><img src= {beer.image_url} alt="beers" /></Link>
               </div>
           ))}
            </div>
        );
    }
}


export default AllBeers
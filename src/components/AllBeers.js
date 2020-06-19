import React from 'react';
import Header from './Header';
import axios from 'axios';
import {Link} from 'react-router-dom'


export default class AllBeers extends React.Component {

    state = {
        beers: [],
        filteredBeers: []
    }

    

    //GET ALL BEERS
    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((res) => {
            console.log(res)
            this.setState({
                beers: res.data,
                filteredBeers: res.data
            })
        })
    }

    // componentDidUpdate(){

    // }

    // //FILTER BEERS
    // handleFilter = (e) => {
    //     let input = e.target.value

    //     axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${input}`)
    //     .then((res) => {
    //         let newBeers = this.state.beers.filter((beer) => {
    //             return beer.name.startsWith(input)
    //           })
    //         this.setState({
    //             filteredBeers: newBeers
    //           })

    //     })
        
    
    //   }

    render(){

        return (
            <div>
                <Header />
                <input type="text" onChange={this.props.onFilter} placeholder="Search all beers..."></input>
                <h1>All Beers</h1>
                
                {
                    this.state.filteredBeers.map((beer) => {
                        return <Link to={`/all-beers/${beer._id}`}>
                        <img src={beer.image_url} alt="beer"></img>
                        <h4>{beer.name}</h4>
                        <h6>{beer.tagline}</h6>
                        <p>{beer.contributed_by}</p>
                        </Link>
                    })
                }
            </div>
        )
    }
}
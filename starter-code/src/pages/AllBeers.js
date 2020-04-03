import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
import BeerCard from '../components/BeerCard'


export default class AllBeers extends Component {
    state = {
        beers:[]
    }
    //axios get using search query and update state.beers to returned results
    searchBeer = (e) => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
        .then(response=>{
            let beersdata = response.data
            this.setState({
                beers:beersdata
            })
        })
        .catch(err=>console.log(err))
    }
    
    //load all beers
    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response=>{
            let beersdata = response.data
            this.setState({
                beers:beersdata
            })
        })
        .catch(err=>console.log(err))
    }
    render() {
        return (
            <div>
                <Nav/>
                <div className='searchbar'>
                    <input type="text" onChange={this.searchBeer} name='query' placeholder='Find A Beer'/>
                </div>
                <div className='beer-holder'>
                    {this.state.beers.map(beer=>(
                        <BeerCard
                            key={beer._id}
                            id={beer._id}
                            img={beer.image_url}
                            name={beer.name}
                            tagline={beer.tagline}
                            contri={beer.contributed_by}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

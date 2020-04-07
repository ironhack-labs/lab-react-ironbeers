import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
import BeerCard from '../components/BeerCard'


export default class AllBeers extends Component {
    state = {
        beers:[],
        search:'',
        beersfound:[]
    }
    //axios get using search query and update state.beers to returned results
    // searchBeer = (e) => {
    //     axios.get(`https://ih-beers-api.herokuapp.com/beers/search?q=${e.target.value}`)
    //     .then(response=>{
    //         let beersdata = response.data
    //         this.setState({
    //             beers:beersdata
    //         })
    //     })
    //     .catch(err=>console.log(err))
    // }
    
    //load all beers
    searchBeer = (e) => {
        console.log(e.target.value)
        if (e.target.value === ''){
            console.log('input is empty')
            this.setState({
                beersfound: [...this.state.beers]
            })
        } else {
            let beersFound = this.state.beers.filter(beer=>{
                if (beer.name.toLowerCase().includes(e.target.value.toLowerCase())){
                    return true
                }
            })
            console.log(beersFound.length)
            this.setState({
                beersfound:beersFound
            })
        }
    }
    componentDidMount(){
        axios.get('https://ih-beers-api.herokuapp.com/beers')
        .then(response=>{
            let beersdata = response.data
            this.setState({
                beers:beersdata,
                beersfound:beersdata
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
                    {this.state.beersfound.map(beer=>(
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

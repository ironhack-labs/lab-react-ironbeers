import React, { Component } from 'react'
import axios from 'axios'
import BeerCard from '../components/BeerCard/BeerCard'

class AllBeers extends Component {
    constructor(props){
        super(props)

        this.state = {
            beers: [],
            search: ''
        }

        this.handlechange = this.handlechange.bind(this)
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => {
                this.setState({
                    beers: res.data
                })
            })
            .catch(err => console.log(err))
    }

    handlechange(e){
        this.setState({
            search: e.target.value
        })
        console.log(e.target.value)
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
        .then(res => {
            this.setState({
                beers: res.data
            })
        })
        .catch(err => console.log(err))
    }


    render() {

        if(!this.state.beers.length) return <div>...Loading</div>

        return (
            <div>
                <input type="text" id='search' name='search' placeholder='Search' value={this.state.search} onChange={this.handlechange} onFocus={e => (e.target.placeholder = '')} onBlur={e => (e.target.placeholder = 'Search')} />
                {this.state.beers.map(beer => {
                    return <BeerCard key={beer._id} beer={beer}/>
                })}
            </div>
        )
    }
}

export default AllBeers

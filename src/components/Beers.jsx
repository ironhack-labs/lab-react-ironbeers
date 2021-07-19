import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import home from '../assets/home button.png'
import axios from 'axios'

class Beers extends Component {

    state = {
        filteredBeers: []
    }

    handlefilterBeers = async (event) => {
        let query = event.target.value
        let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
        this.setState({
            filteredBeers: response.data
        })
    }


    render() {
        let beerList = []
        const {beers} = this.props

        if(this.state.filteredBeers.length !== 0){
            beerList = this.state.filteredBeers
        } 
        else{
            beerList = beers
        }  
        return (
            <div>
                <Link to={'/'}><img src={home} alt="" style={{width: '500px'}}/></Link> 
                <div>
                <input onChange={this.handlefilterBeers} type="text" name="beer" placeholder="Search Beer"/>
                </div>
                <ul>
                    {
                        beerList.map((beer, i) => {
                            return (
                                <div key={i}>
                                   <Link to={`/beers/${beer._id}`}><img src={beer.image_url} alt="" style={{height: '200px'}}/></Link> 
                                    <h3>{beer.name}</h3>
                                    <h5>{beer.tagline}</h5>
                                    <p>{beer.contributed_by}</p>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Beers

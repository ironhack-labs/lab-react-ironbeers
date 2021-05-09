import React from 'react'
import './Beers.css'
import axios from 'axios'

import {Link} from 'react-router-dom'

import NavBar from '../NavBar'

class Beers extends React.Component{
    
    state={
        beers: []
    }

    componentDidMount(){
        const stateCopy = {...this.state}
        stateCopy.beers = this.props.beers
        this.setState(stateCopy)
    }

    updateSearch(event){
        const {value} = event.target
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
        .then((result) => {
            const stateCopy = {...this.state}
            stateCopy.beers = result.data
            this.setState(stateCopy)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    showBeers(){
    const beers = this.state.beers
        if(beers.length > 0){
            return beers.map((beer, index)=>{
                return (
                    <div key={index}>
                        <div className="beer">
                            <div className="beer-img"><img src={beer.image_url} alt={beer.name+'-img'} /></div>
                            <div className="beer-data">
                                <h2>{beer.name}</h2>
                                <h4>{beer.tagline}</h4>
                                <h6><strong>Created by: </strong>{beer.contributed_by}</h6>
                                <Link to={`/beers/${beer._id}`}>Beer details</Link>
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            })
        } else {
            return <div><i className="material-icons loading-icon">sync</i>Loading</div>
        }
    }

    render() {
        return(
            <div className="Beers">
                <NavBar />
                <div className="body">
                    <div className="SearchBar">
                        <input onChange={(event)=>this.updateSearch(event)} type="text" name="searchBar" />
                    </div>
                    {this.showBeers()}
                </div>
            </div>
        )
    }
}

export default Beers

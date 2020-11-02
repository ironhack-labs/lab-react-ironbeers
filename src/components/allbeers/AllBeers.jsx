import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Axios from 'axios'
import SearchBar from '../searchbar/SearchBar'

const BEERS_FROM_DB = 'https://ih-beers-api2.herokuapp.com/beers'

export default class AllBeers extends Component {
    state = {
        beers: '',
        search: '',
        // filteredBySearch: ''
      }
    
    componentDidMount () {

        Axios 
        .get(BEERS_FROM_DB)
        .then(response => {
            this.setState({ beers: response.data })
            this.props.updateStateAppJs(this.state.beers)
        })

    }

    filterBySearch = (searchTerm) => {
        Axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchTerm.search}`)
            .then(response => {
                this.setState({beers: response.data})
            })
            .catch(err => console.log(err))
    }


    render() {  
        
        if(this.state.beers.length < 1 ) {
            return <h1>Loading</h1>
          }

        const beersArray = this.state.beers
      

        return (
            <>
            <SearchBar searchTerm={this.filterBySearch}/>
            <div className="row ">
                {beersArray.map((beer,index) => 
                    <div className='col' key={beer._id}>
                    <Link to={`/beer/beers/${beer._id}`}  style={{ textDecoration: 'none' }} className=' card text-decoration-none text-muted'>
                        <img  style={{ width: '10vh' }}src={beer.image_url} alt=''></img>
                        <h2 className='card-title mx-3 my-4 text-dark'>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                        <h4>Created by: {beer.contributed_by}</h4>
                        <hr></hr>
                    </Link>
                    </div>
                )}
            </div>
            </>
        )
    }
}

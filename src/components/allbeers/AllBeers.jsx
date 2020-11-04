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
            <div className="d-flex flex-row justify-content-center flex-wrap flex-sm-wrap ">
                {beersArray.map((beer,index) => 
                    <div className='card border-white ' key={beer._id} style={{ width: '18rem'}}>
                        <Link to={`/beer/beers/${beer._id}`}  style={{ textDecoration: 'none' }} className=' card text-decoration-none text-muted border-white'>
                           <div>
                             <img  className="card-img-top p-5" src={beer.image_url} alt=''></img>
                           </div>
                           <div className='card-body'>
                                <h2 className='card-title mx-3 my-4 text-dark font-weight-bold'>{beer.name}</h2>
                                <h3 className='card-text mx-3 my-4 text-dark'>{beer.tagline}</h3>
                                <h4 className='card-text mx-3 my-4'>Created by: {beer.contributed_by}</h4>
                           </div>
                        </Link>
                    </div>
                )}
            </div>
            </>
        )
    }
}

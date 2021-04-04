import axios from 'axios'
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './BeersList.css'
import Header from '../Header/Header'


class BeersList extends Component{
    state={
        data: null,
        loading: true
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then(res => {
            
            this.setState({
             data: res.data,
             loading: false
          } 
          )
        })

      }

    render(){
        return (
            <div className='BeersList'>
            <Header />

            
            
                {this.state.loading ? (<div class="preloader"></div>) : 
                <div className='list__wrapper container'>

                        {this.state.data.map((beer) => (
                            <Link to={`/beers/${beer._id}`}  className='card__wrapper'>
                                <div className="row mx-5 my-5" key={beer._id}>
                                <div  >
                                    <img src={beer.image_url} alt='beer' height='200'/>
                                </div>
                                <div className="column mx-2 d-flex flex-column align-items-center justify-content-center pt-3">
                                    <h3>{beer.name}</h3>
                                    <h5>{beer.tagline}</h5>
                                    <p><b>Created by:</b>{beer.contributed_by}</p>
                                </div>
                            </div>
                            </Link>
                        ))}

                </div>

                }

            </div>
        )
    }
}



export default BeersList
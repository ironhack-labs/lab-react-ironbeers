import React from 'react'
import HomeButton from '../HomeButton/HomeButton'
import './BeerList.css'
import BeersService from '../../services/beers.services'
import { Link } from 'react-router-dom'


class BeerList extends React.Component {
    constructor() {
        super()


        this.state= {
            beers: []
        }
        this.service = new BeersService()
    }


    componentDidMount() {
    
        this.service.getAllBeers()
          .then(response => {
            this.setState({
                beers: response.data
            })
          })
          .catch(err => console.log(err))
    }



    render() {
        return(
            <>
            <HomeButton />
            <div>
                {this.state.beers.map(elm =>
                    <div className="form-container">
                        <img className="beer-list-img" src={elm.image_url} alt={elm.name} />
                        <h1 className="form-label">{elm.name}</h1>
                        <p>{elm.tagline}</p>
                        <p>{elm.contributed_by}</p>
                        <div>
                            <Link to={`/beer/${elm._id}`}>Check this beer</Link>
                        </div>
                    </div>
                )}
            </div>

            </>
        )
    }
}


export default BeerList
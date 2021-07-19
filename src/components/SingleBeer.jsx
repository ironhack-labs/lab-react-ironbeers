import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import home from '../assets/home button.png'

class SingleBeer extends Component {
    state = {
        beerDetail: null
    }

    componentDidMount = async () => {
        let beerId = this.props.match.params.beerId
        let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        this.setState({
            beerDetail: response.data
        })
    }

    render() {
        const {beerDetail} = this.state
        if(!this.state.beerDetail){
            return <div>Loading Beer . . .</div>
        }
        return (
            <div>
                <div>
                <Link to={'/'}><img src={home} alt="" style={{width: '500px'}}/></Link>
                </div>
                <img src={beerDetail.image_url} alt="" style={{height: '300px'}}/>
                <h3>{beerDetail.name}             {beerDetail.attenuation_level}</h3>
                <h5>{beerDetail.tagline}          {beerDetail.first_brewed}</h5>
                <p>{beerDetail.description}</p>
                <p>{beerDetail.contributed_by}</p>
            </div>
        )
    }
}

export default SingleBeer

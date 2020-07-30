import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'

export class SingleBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount = () => {
        this.getBeer()
    }
    getBeer = () => {
        const {state} = this.props.location
        if (state) {
            this.setState(state)
        } else {
            axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(({data: randomBeer}) => {
                this.setState(randomBeer)
            })
        }
    }
    render() {
        const {image_url, name, attenuation_level, tagline, first_brewed, description, contributed_by} = this.state
        return (
            <div>
                <Header />
                <div className='d-flex flex-column'>
                    <div className='align-self-center py-5'>
                        <img style={{height: '250px'}} src={image_url} alt={name} />
                    </div>    
                </div>
                <div className='d-flex justify-content-between px-4'>
                    <h2>{name}</h2>
                    <h3 className='text-secondary'>{attenuation_level}</h3>    
                </div> 
                <div className='d-flex justify-content-between px-4'>
                    <h5 className='text-secondary'>{tagline}</h5>
                    <h6><b>{first_brewed}</b></h6>    
                </div>
                <p className='px-4 description-beer'><b>{description}</b></p>
                <p className='px-4 text-secondary'><b>{contributed_by}</b></p>
            </div>
        )
    }
}

export default SingleBeer

import React, { PureComponent } from 'react'
import axios from 'axios'
import './alBeers.css'
import {Link} from 'react-router-dom'

class AlBeers extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            allBeers: []
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/').then(res => {
            this.setState({
                allBeers: res.data
            })
        })
    }

    displayBeers = () => {
        let ab = [...this.state.allBeers]
        return ab.map(brew => {
            return (
                <div className='beer-card'>
                    <img src={brew.image_url} alt='Brew' />
                    <div>
                        <Link to={`/beers/${brew.name}`}>{brew.name}</Link>
                        <p>{brew.tagline}</p>
                        <p>Contributed By: {brew.contributed_by}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>{this.displayBeers()}</div>
        )
    }
}

export default AlBeers
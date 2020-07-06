import React, { PureComponent } from 'react'
import axios from 'axios'
import './alBeers.css'
import { Link } from 'react-router-dom'

class AlBeers extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            allBeers: [],
            allBeersOriginal: []
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/').then(res => {
            this.setState({
                allBeers: res.data,
                allBeersOriginal: [...res.data]
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

    handleChange = (event) => {
        event.preventDefault()
        let filtered = [...this.state.allBeersOriginal].filter(beer => beer.name.includes(event.target.value))
        this.setState({
            allBeers: filtered
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} type='text' placeholder='Search' />
                <div>{this.displayBeers()}</div>
            </div>
        )
    }
}

export default AlBeers
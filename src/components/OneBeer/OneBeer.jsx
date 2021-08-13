import axios from 'axios'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './OneBeer.css'

class OneBeer extends Component {
    constructor(props){
        super(props)

        this.state = {
            beer : null
        }

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        const locState = this.props.location.state  

        if(locState){
            console.log('Retreive data in local state', locState.beer._id)
            this.setState({
                beer: locState.beer
            })
        }
        if(!locState){
            const sufix = (this.props.match.params.id || 'random')
            console.log('API call to get beer ' + sufix)
            axios.get('https://ih-beers-api2.herokuapp.com/beers/' + sufix)
                .then(res => {
                    this.setState({
                        beer: res.data
                    })
                })
                .catch(err => console.log(err))
        }
    }

    handleClick(){
        console.log('API call to get a new random beer')
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(res => {
                this.setState({
                    beer: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const beer = this.state.beer

        if(!beer) return <div>...Loading</div>
   
        const contributor = beer.contributed_by ? beer.contributed_by.match(/.+?(?=<)/) ? beer.contributed_by.match(/.+?(?=<)/)[0] : beer.contributed_by : ''

        return (
            <div className='one-beer'>
                <div className='one-beer-img'>
                    <img src={beer.image_url} alt={beer.name}/>
                </div>
                <div className="one-beer-info">
                    <div className="one-beer-title">
                        <h2>{beer.name}</h2>
                        <span>{beer.attenuation_level}%</span>
                    </div>
                    <div className="one-beer-subtitle">
                        <h3>{beer.tagline}</h3>
                        <span>{beer.first_brewed}</span>
                    </div>
                    <p className="one-beer-description">
                        {beer.description}
                    </p>
                    <p><span className='one-beer-creator'>Created by: </span>{contributor}</p>
                </div>

                {(window.location.pathname === '/beer/random') && <button className='beer-btn' onClick={this.handleClick}>New Random beer !</button>}
            </div>
        )
    }
}

export default withRouter(OneBeer)

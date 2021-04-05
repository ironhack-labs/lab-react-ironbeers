import React, {Component} from 'react'
import axios from 'axios'
import{Link} from 'react-router-dom'
import Header from '../Header/Header'

class RandomBeer extends Component{
    state = {
        randombeer: {}
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(beer => this.setState({randombeer:beer.data}))
        .catch(error=> console.log(error))
    }

    render(){
        const {randombeer}= this.state
        return(
            <div>
                <Header />
                <div className='container'>
                    <div className='img__box' >
                    <img src={randombeer.image_url} style={{width: '100px', padding:'15px'}} alt= {randombeer.name} />
                    </div>
                    <div className='name__randombeer'>
                        <h2>{randombeer.name}</h2>
                    </div>
                    <div className='tagLine__box'>
                        <h5>{randombeer.tagline}</h5>
                        <p>{randombeer.first_brewed}</p>
                    </div>
                    <div className='description'>
                        <p><strong>AB</strong> {randombeer.attenuation_level}</p>
                        <p>{randombeer.description}</p>
                        <p>{randombeer.contribuited_by}</p>
                        <Link className="btn btn-primary my-5" to='/'>Back to Home</Link> 
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomBeer
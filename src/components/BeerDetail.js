import React, { Component } from 'react'
import axios from 'axios' 
import Header from './Header'

class BeerDetail extends Component {

    
    state = {
        beer: {}
    }
    

    componentDidMount(){
        //let beerId = this.props.match.params.beerId
        console.log('this are my props: ', this.props)
        let beerId = this.props.match.params.beerId
        console.log('my beer id id: ', beerId)
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response) => {
                this.setState({
                    beer: response.data
                })
            })
            
    }

    render() {
        console.log()
        const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by, _id } = this.state.beer
        //const { i } = this.state
        return (
            <div>
                <Header />
                <div>
                    <h3 style={{color: 'gray'}}>In BeeR/$beerId beer page</h3>
                    <div>
                        <img src={image_url} style={{height: '150px'}} alt='beerZ' />
                        <div>Name: {name}</div>
                        <div>Tagline: {tagline}</div>
                        <div>First brewed: {first_brewed}</div>
                        <div>Attenuation level: {attenuation_level}</div>
                        <div>Description: {description}</div>
                        <div>Contributed by: {contributed_by}</div>
                        <div>_id: {_id}</div>
                    </div>

                    
                </div>
            </div>
        )
    }
}


export default BeerDetail

import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'


class SingleBeer extends React.Component {

    state = {
        beer: {},
    }

    componentDidMount(){
        if (this.props.random){
            axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(result => {
                this.setState({beer: result.data})
            })
            .catch(error => {
                console.log(error)
            })    

        }else{
            const {id} = this.props.match.params
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
                .then(result => {
                    this.setState({beer: result.data})
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    
    render(){
        const {image_url, name, tagline, first_brewed, attenuation_level,description, contributed_by} = this.state.beer
        return (
            <div className="SingleBeer">
                <Navbar />
                <img src={image_url} alt={name} className="Beer-img"/>
                <div>
                    <h2>{name}</h2>
                    <p>{tagline}</p>
                    <p>{first_brewed}</p>
                    <p>{attenuation_level}</p>
                    <p>{description}</p>
                    <p>{contributed_by}</p>
                </div>
            </div>
        )
    }
}

export default SingleBeer
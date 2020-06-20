import React from 'react'
import axios from 'axios'

export default class RandomBeer extends React.Component{

    state = {
        randomBeer: ''
    }

    componentDidMount(){
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((res) => {
                console.log(res)
                this.setState({
                    randomBeer: res.data
                })
            })
    }

    render(){

        const {image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = this.state.randomBeer
        return (
            <>
            <div class="card" style={{ width: '18rem' }}>
                    <div className="top">
                        <img src={image_url} class="card-img-top" alt="beer-img" />
                    </div>
                    <div class="card-body bottom">
                        <div>
                            <h5 class="card-title">{name}</h5>
                            <h5>{attenuation_level}</h5>
                        </div>
                        <div>
                            <small>{tagline}</small>
                            <small>{first_brewed}</small>
                        </div>
                        <div>
                            <p>{description}</p>
                            <small>{contributed_by}</small>
                        </div>
                    </div>
                </div>
            </>)
    }
}
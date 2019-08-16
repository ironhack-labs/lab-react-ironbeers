import React , {Component}from 'react'
import Services from '../services/beer.services'
import { Link } from 'react-router-dom'

class BeerDetails extends Component {
    constructor() {
        super()
        this.state = { beer: {}}
        this.services = new Services
    }

    componentDidMount() {
        this.services.getOneBeer(this.props.match.params.id)
            .then(response => {
                console.log(response.data)
                this.setState({ beer: response.data })})
            .catch(err => console.log('err', err))
    }

    render() {
        const beer = this.state.beer
       return <div className = "contaier">
                <article className = "beer-detail">
                <div className = "row justify-content-center">
                     <div className = "col-3">
                        <img className = "image-beer-detail" src ={beer.image_url}/>
                     </div>
                </div>
                <div className = "row justify-content-center">
                    <div className = "col-3">

                    <h3>{beer.name}</h3> <p>{beer.attenuation_level}</p>
                    <h4>{beer.tagline}</h4>
                    <p>{beer.description}</p>
                    <p>{beer.first_brewed}</p>
                    <p>{beer.contributed_by}</p>

                    </div>
                </div>
                </article>
            </div>
    }
}

export default BeerDetails
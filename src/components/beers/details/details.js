import React, {Component} from 'react'

//API
import BeerService from '../../../service/beers-service'

class Details extends Component {
     
    constructor (props){
        super (props)
        this.state = {
            selected: {}
        }
    
        this.BeerService = new BeerService()
    }

    componentDidMount = () => {

        const id = this.props.match.params.id
     

        this.BeerService
            .getOneBeer(id)
            .then(response => {
                console.log('la respuesta de la api es: ', response)
                this.setState({ selected: response.data })}
                )
            .catch(err => console.log(err))
    }

    render () {
        return (
            <div className='text-card'>
                <h3>{this.state.selected.name}</h3>
                <img src={this.state.selected.image_url} />
                <h6>{this.state.selected.tagline}</h6>
                <p>{this.state.selected.first_brewed}</p>
                <p>{this.state.selected.attenuation_level}</p>
                <p>description: {this.state.selected.description}</p>
                <p>{this.state.selected.contributed_by}</p>

            </div>
        )
    }
}

export default Details
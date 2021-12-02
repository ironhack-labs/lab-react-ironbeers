import React, {Component} from 'react'
import ServiceBeers from '../service/serviceBeers'

class SingleBeer extends Component {

    constructor() {
        super()
    
        this.state = {
          image_url: "",
          name: "",
          tagline: "",
          first_brewed: "",
          attenuation_level: "",
          description: "",
          contributed_by: ""
        }
    
        this.service = new ServiceBeers()
      }
    
    componentDidMount() {
        const id = this.props.match.params.id

        this.service.getOneBeer(id)
            .then(response => {
            const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = response.data

            this.setState({ image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by })
            })
            .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div>
                <div>
                    <img src={this.state.image_url} alt="birraso"/>
                </div>
                <div>
                    <h2>{this.state.name}</h2>
                    <h3>{this.state.tagline}</h3>
                    <h4>{this.state.first_brewed}</h4>
                    <h5>{this.state.attenuation_level}</h5>
                    <p>{this.state.description}</p>
                    <p>{this.state.contributed_by}</p>
                </div>
            </div>
        )
    }
}

export default SingleBeer

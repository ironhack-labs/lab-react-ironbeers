import React, {Component} from 'react'
import Header from '../../components/Header'
import axious from 'axios'
import Card from '../../components/Card'


class BeerDetail extends Component {
    state = {
        beer: []
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        const {data} = await axious.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        this.setState({beer:{...data}})
        //console.log(data)
    }

    render(){
        return(
            <>
            <Header />
            <Card  
            image={this.state.beer.image_url}
            name={this.state.beer.name}
            tagline={this.state.beer.tagline}
            first_brewed={this.state.beer.first_brewed}
            attenuation_level={this.state.beer.attenuation_level}
            description={this.state.beer.description}
            contributed_by={this.state.beer.contributed_by}
         />
            </>
        )
    }

}

export default BeerDetail
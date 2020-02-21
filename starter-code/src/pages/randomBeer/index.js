import React, {Component} from 'react'
import axious from 'axios'
import Header from '../../components/Header'
import Card from '../../components/Card'

class RandomBeer extends Component{
    state={
        randomBeer: []
    }

    async componentDidMount() {
        //const { id } = this.props.match.params
        const {data} = await axious.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        this.setState({randomBeer:{...data}})
        //console.log(data)
    }


    render(){
        return(
            <>
            <Header />
            <Card  
            image={this.state.randomBeer.image_url}
            name={this.state.randomBeer.name}
            tagline={this.state.randomBeer.tagline}
            first_brewed={this.state.randomBeer.first_brewed}
            attenuation_level={this.state.randomBeer.attenuation_level}
            description={this.state.randomBeer.description}
            contributed_by={this.state.randomBeer.contributed_by}
         />
            </>
        )
    }
}

export default RandomBeer
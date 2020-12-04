import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import BeerCard from './BeerCard'


class RandomBeer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            randomBeer:{},
        }
    }
   

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
         .then(res=>{
            // const beerId=this.props.match.params.id;
            console.log(res.data)
            const randomBeer=res.data
             this.setState({
                randomBeer:randomBeer,
             })
         })
    }

    render() {
        return (
            <div>
            <BeerCard
                img={this.state.randomBeer.image_url}
                name={this.state.randomBeer.name}
                attenuation={this.state.randomBeer.attenuation_level}
                tagline={this.state.randomBeer.tagline}
                firstBrewed={this.state.randomBeer.first_brewed}
                description={this.state.randomBeer.description}
                contributed_by={this.state.randomBeer.contributed_by}
            /> 
                
            </div>
        )
    }
}

export default RandomBeer;
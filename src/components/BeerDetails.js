import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import BeerCard from './BeerCard'



class BeerDetails extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selectedBeer:{},
        }
    }
   

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
         .then(res=>{
            const beerId=this.props.match.params.id;
            const selectedBeer=res.data.find(beer=>beer._id===beerId)
             this.setState({
                selectedBeer:selectedBeer,
             })
         })
    }

    render() {
        return (
            <div>
            <BeerCard
                img={this.state.selectedBeer.image_url}
                name={this.state.selectedBeer.name}
                attenuation={this.state.selectedBeer.attenuation_level}
                tagline={this.state.selectedBeer.tagline}
                firstBrewed={this.state.selectedBeer.first_brewed}
                description={this.state.selectedBeer.description}
                contributed_by={this.state.selectedBeer.contributed_by}
            /> 
            </div>
        )
    }
}

export default BeerDetails;
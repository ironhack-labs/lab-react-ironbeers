import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import beerService from '../service/beerService'


class BeerDetail extends Component{
    constructor(props){
        super(props)
        this.state={beer:[]}
        this.services=new beerService()
    }

    componentDidMount(){
        this.services.getOneBeer(this.props.match.params.id)
            .then(theBeer=>this.setState({beer: theBeer}))
    }

    

    render(){
        return(
            <div>
                <Link to='/list'>Volver al listado</Link>
                <h1>{this.state.beer.name}</h1>
                <img src={this.state.beer.image_url} alt={this.state.beer.name}/>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.description}</p>
            </div>
        )
    }



}


export default BeerDetail
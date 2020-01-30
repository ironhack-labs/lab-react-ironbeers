import React, { Component } from 'react';
import axios from 'axios';

export default class beerinfo extends Component {


constructor(props){
    super(props)
    this.state = {
        beerinfo: []
    }
}

componentDidMount(){
    let id = this.props.match.params.id
    axios.get("https://ih-beers-api2.herokuapp.com/beers/"+id)
    .then(response => {
        this.setState({beerinfo: response.data});
    })    
}

    render() {
        //console.log(this.state.beerinfo.name)
        return (
            <div>
                <img src={this.state.beerinfo.image_url} alt="NoPic" />
                <h1>{this.state.beerinfo.name}</h1>
                <p>{this.state.beerinfo.tagline}</p><br/>
                <p>{this.state.beerinfo.first_brewed}</p><br/>
                <p>{this.state.beerinfo.attenuation_level}</p><br/>
                <p><b>{this.state.beerinfo.description}</b></p><br/>
                <p>{this.state.beerinfo.contributed_by}</p><br/>
            </div>
        )
    }
}

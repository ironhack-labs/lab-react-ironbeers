import React, { Component } from 'react'
import {getBeer} from "../services/beerList"

export default class Beer extends Component {
    state={
        beer:{}
    }
    async componentDidMount(){
        const data= await getBeer(this.props.beerId)
    this.setState({beer:{...data}})
        }
    render() {
        return (
            <>
            <div>
                {this.state.beer && <> 
                
                {this.state.beer.name}
                <img className="imgAll" src={this.state.beer.image_url} alt="name" />
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.contributed_by}</p>
                </>}
            </div>
            </>
        )
    }
}
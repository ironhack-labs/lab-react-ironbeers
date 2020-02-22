import React, { Component } from "react"
import {getAllBeers} from "../services/ihBeers"
import Beer from "./Beer";

export default class Beers extends Component{
    state={
        beers:[]
    }


    async componentDidMount(){
        const beers=await getAllBeers();
        this.setState({beers});
    }

    render(){
        return(
            <div className="Chelas">
                {this.state.beers.map(beer=><Beer key={beer._id} beer={beer} />)}
            </div>
        )
    }


}



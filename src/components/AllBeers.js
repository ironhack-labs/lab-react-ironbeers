import React,{ Component } from "react";
import CardBeer from "./CardBeer.js";
import NavBar from "./NavBar";

class AllBeers extends Component{
    state={
        listBeers:this.props.beers
    }
    

    render(){
        return(
        <>
            <NavBar/>
            {this.state.listBeers.map(element=><CardBeer key={element._id} list={element}/>)}
        </>
        )
    }
}

export default AllBeers
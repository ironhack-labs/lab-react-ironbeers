import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'





export default class AllBeers extends Component {
    state={
        allBeers : null,
        oneBeer: undefined,
        selectedBeers: null,
    }

    boxStyle={
        padding: "30px", 
        display : "flex", 
        margin: 30, 
        border:"1px solid darkgrey", 
        boxShadow: "2px 2px 10px 0 #EEE", 
        justifyContent: "space-evenly",
        textDecoration: "none",
        backgroundColor: "#FAFAFA",
        color: "#282c34",
        borderRadius: 10,
    width: 500}

    componentDidMount(){
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((beers)=>{
            this.setState({allBeers : beers.data})})
        .catch((err)=>console.log(err))

    }
  
    handleChange=(event)=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${event.target.value}`)
        .then((result)=> this.setState({selectedBeers : result.data}))
        .catch((err)=>console.log(err))
    }

    render() {
        if (!this.state.allBeers){return <div>Loading...</div>}

        return (

            <div style={{width: 600, margin: "auto"}}>
                {/* Searchbar */}
                <label htmlFor="search">Search</label>
                <input  style={{ margin: 20, border:"1px solid darkgrey"}} id="search" onChange={this.handleChange} type="text"/>

                {/* Displaying beers */}
                {this.state.selectedBeers? this.state.selectedBeers.map((beer)=>{
                    return <Link key={beer._id} style={this.boxStyle} to={`/beers/${beer._id}`}>
                            <img style={{width: 30}}src={beer.image_url} alt=""/>
                            <div ><h2>{beer.name}</h2>
                            <p>{beer.tagline}</p></div>
                            </Link>
                            }) 
                : this.state.allBeers.map((beer)=>{
                    return <Link to={`/beers/${beer._id}`} key={beer._id} style={this.boxStyle}>
                            <img style={{width: 30}}src={beer.image_url} alt=""/>
                            <div style={{width : 300}}><h2>{beer.name}</h2>
                            <p>{beer.tagline}</p></div>
                            </Link>
                            })
                            
                }
            </div>
        )
    }
}

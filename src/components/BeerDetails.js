import React from "react"
import axios from 'axios'
import { NavLink } from "react-router-dom"
import Navbar from "./Navbar"

class BeerDetails extends React.Component{
    state ={
        image: "",
        name:"",
        tagline: "",
        firstBrewed:"",
        attenuationLevel:"",
        description: "",
        contributedBy:"",
    }


    async componentDidMount(){
        const beerId = this.props.match.params.beerId
        const findBeer = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        console.log(findBeer.data)
        this.setState({
            image: findBeer.data.image_url,
            name: findBeer.data.name,
            tagline: findBeer.data.tagline,
            firstBrewed: findBeer.data.first_brewed,
            attenuationLevel: findBeer.data.attenuation_level,
            description: findBeer.data.description,
            contributedBy: findBeer.data.contributed_by
        })
    }

    render(){
        const {image, name, tagline, firstBrewed, attenuationLevel, description, contributedBy} = this.state
        return(
            <>
            <Navbar/>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <hr />
            <h3>{tagline}</h3>
            <h4>{firstBrewed}</h4>
            <h3>{attenuationLevel}</h3>
            <p>{description}</p>
            <p>{contributedBy}</p>
            </>
        )
    }
}


export default BeerDetails
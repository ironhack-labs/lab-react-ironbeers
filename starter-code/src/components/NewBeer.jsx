import React, { Component } from 'react'
import axios from "axios"

class NewBeer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // beers: {},
            image: "",
            name: "",
            tagline: "",
            attenuation_level: 0,
            first_brewed: "",
            description:"",
            contributed_by:"",
            brewers_tips:""
            
        }
        this.changeIt = this.changeIt.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    changeIt(e){
        const {name,value} = e.target
        this.setState({
            [name]:value
        })
    }
      
      handleFormSubmit(e) {
          e.preventDefault()

        axios({
            url:"https://ih-beers-api.herokuapp.com/beers/new",
            data:this.state,
            method:"POST"
        })
        .then((response)=>{
                this.props.history.push(`/beer-details/${response.data._id}`)
        })
           
          let newObj = {
            name: this.state.name,
            image: this.state.image,
            description: this.state.description,
            tagline: this.state.tagline,
            attenuation_level: this.state.attenuation_level,
            first_brewed: this.state.first_brewed,
          }

          this.setState({
            image: "",
            name: "",
            tagline: "",
            attenuation_level: "",
            first_brewed: "",
            description:""
          })

      }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" name = "name" value = {this.state.name} placeholder = "name" onChange={this.changeIt} />
                <input type="text" name = "image" value = {this.state.image} placeholder = "image"onChange={this.changeIt} />
                <input type="text" name = "tagline" value = {this.state.tagline} placeholder = "tagline"onChange={this.changeIt} />
                <input type="text" name = "first_brewed" value = {this.state.first_brewed} placeholder = "first_brewed"onChange={this.changeIt} />
                <input type="number" name = "attenuation_level" value = {this.state.attenuation_level} placeholder = "attenuation_level"onChange={this.changeIt} />
                <input type="text" name = "description" value = {this.state.description} placeholder = "description"onChange={this.changeIt} />
                <input type="text" name = "contributed_by" value = {this.state.contributed_by} placeholder = "contributed_by"onChange={this.changeIt} />
                <input type="text" name = "brewers_tips" value = {this.state.brewers_tips} placeholder = "brewers_tips"onChange={this.changeIt} />
                 <input type="submit"/>
            </form>
        )
    }
}

export default NewBeer

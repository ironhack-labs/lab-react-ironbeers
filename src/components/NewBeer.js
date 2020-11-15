import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"

 class NewBeer extends Component { 
         state = {
            name: "",
            tagline: "", 
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            contributed_By: "",
         }

         handleChange(event) {
            
           const { name, value } = event.target

           this.setState({
               [name]: value
           })
           console.log(this.state)
         }

          handleSubmit(event) {
            // const sendNewBeer = await axios.post("https://api.punkapi.com/v2/beers/new", {...this.state})
            event.preventDefault()
            
            console.log(this.props)
            this.props.addBeer(this.state)

            this.setState({
                name: "",
                tagline: "", 
                description: "",
                first_brewed: "",
                brewers_tips: "",
                attenuation_level: 0,
                contributed_By: "",
            })
         }

       render() {
           return (
               <div>
               <form onSubmit= {this.handleSubmit}>
               <label htmlFor="">Name</label>
               <input type="text" name="name" onChange= {(event) => this.handleChange(event)}/>
               <label htmlFor="">Tagline</label>
               <input type="text" name="tagline" onChange= {(event) => this.handleChange(event)}/> */}
               <label htmlFor="">Description</label>
               <textarea type="text" name="description" onChange= {(event) => this.handleChange(event)}/>
               <label htmlFor="" >First Brewed</label>
               <input type="text"name="firstbrewed" onChange= {(event) => this.handleChange(event)}/>
               <label htmlFor="" >Brewers Tips</label>
               <input type="text" name="brewersTips" onChange= {(event) => this.handleChange(event)}/>
               <label htmlFor="">Attenuation Level</label>
               <input type="text" name="attenuationLevel" onChange= {(event) => this.handleChange(event)}/>
               <label htmlFor="">Contributed by</label>
               <input type="text" name="contributedBy" onChange= {(event) => this.handleChange(event)}/>
               <input type= "submit" value="submit"/>
           </form>
    
                    <Link to= "/beers">Back</Link>
                   
                   {/* <button onClick={this.props.history.goBack}>Go Back</button> */}
               </div>
           )
           }
}

export default NewBeer




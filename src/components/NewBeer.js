import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"

export class NewBeer extends Component { 
         state = {
            name: "",
            tagline: "", 
            description: "",
            firstBrewed: "",
            brewersTips: "",
            attenuationLevel: 0,
            contributedBy: "",
         }

         handleChange(event) {
           const { name, value } = event.target

           this.setState({
               [name]: value
           })
         }

         async handleSubmit() {
            const sendNewBeer = await axios.post("hhttps://api.punkapi.com/v2/beers/new", {...this.state})
         }

       render() {
           return (
               <div>
               <form onSubmit= {this.handleSubmit}>
               <label htmlFor="">Name</label>
               <input type="text" name="name" onChange= {(event) => this.handleChange(event)}/>
               <label htmlFor="">Tagline</label>
               <input type="text" name="tagline" onChange= {(event) => this.handleChange(event)}/>
               <label htmlFor="">Description</label>
               <textarea type="text" name="description" onChange= {(event) => this.handleChange(event)}/>
               <label htmlFor="" >First Brewed</label>
               <input type="text"name="firstBrewed" onChange= {(event) => this.handleChange(event)}/>
               <label htmlFor="" >Brewers Tips</label>
               <input type="text" name="brewersTips" onChange= {(event) => this.handleChange(event)}/>
               <label htmlFor="">Attenuation Level</label>
               <input type="text" name="attenuationLevel" onChange= {(event) => this.handleChange(event)}/>
               <label htmlFor="">Contributed by</label>
               <input type="text" name="contributedBy" onChange= {(event) => this.handleChange(event)}/>
               <button type= "submit">Submit</button>
           </form>
    
                    <Link to= "/beers">Back</Link>
                   
                   {/* <button onClick={this.props.history.goBack}>Go Back</button> */}
               </div>
           )
           }
}

export default NewBeer




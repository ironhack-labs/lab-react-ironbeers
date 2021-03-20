import React, { Component } from 'react'
import axios from 'axios'

 class NewBeer extends Component {
    static = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    }

  

    handleChange = (event) => {
        const key = event.target.name;
        this.setState({ [key]: event.target.value});
    };

   
    handleSubmit = (event) => {

        

        event.preventDefault();
        console.log("breew breeeew breeeeew");

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", {
                name:  this.state.name,
                tagline:  this.state.tagline,
                description:  this.state.description,
                first_brewed:  this.state.first_brewed,
                brewers_tips:  this.state.brewers_tips,
                attenuation_level: this.state.attenuation_level,
                contributed_by:  this.state.contributed_by
            })
            .then((response) => {
                console.log(response);
                this.props.history.push("/beers")
            })
            .catch((error) => {
                console.log(error);
            })
    }



    render() {


        return (
         <form method="" onSubmit={this.handleSubmit}>
             <div>
                 <label htmlFor="name" >Name</label>
                 <input id="name" onChange={this.handleChange} name="name" type="text" />
             </div>
             <div>
                 <label htmlFor="tagline">Tagline</label>
                 <input id="tagline" onChange={this.handleChange}  name="tagline" type="text"  />
             </div>
             <div>
                 <label htmlFor="description">Description</label>
                 <input id="description" onChange={this.handleChange} name="description" type="text" />
             </div>
             <div>
                 <label htmlFor="first_brewed">First Brewed</label>
                 <input id="first_brewed" onChange={this.handleChange} name="first_brewed" type="text" />
             </div>
             <div>
                 <label htmlFor="brewers_tips">Brewers Tip</label>
                 <input id="brewers_tips" onChange={this.handleChange} name="brewers_tips" type="text"  />
             </div>
             <div>
                 <label htmlFor="attenuation_level">Attenuation Level</label>
                 <input id="attenuation_level" onChange={this.handleChange} name="attenuation_level" type="number"  />
             </div>
             <div>
                 <label htmlFor="contributed_by">Contributed By</label>
                 <input id="contributed_by" onChange={this.handleChange} name="contributed_bt" type="text" />
             </div>

            <button>Submit</button>
         </form>
        )
    }
}

export default NewBeer

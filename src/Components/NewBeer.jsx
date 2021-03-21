import React, { Component } from 'react';
import axios from "axios";

class NewBeer extends Component {
    state = {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewer_tips: "",
        attenuation_level: 0,
        contributed_by: ""
      };

      handleChange = (event) => {
        const key = event.target.name;
        this.setState({ [key]: event.target.value });
      };

      handleSubmit = (event) => {
        event.preventDefault();
        console.log("Click works!");

        axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new", {
            name: this.state.name,
            tagline: this.state.tagline,
            description:this.state.description,
            first_brewed: this.state.first_brewed,
            brewer_tips: this.state.brewer_tips,
            attenuation_level: this.state.attenuation_level,
            contributed_by: this.state.contributed_by
        })
        .then((response) => {
            console.log("THE RESPONSE", response)
            this.props.history.push("/beers");
            
          })
          .catch((error) => {
            console.log(error);
          });

      }

    render() {
        return (
            <form method="" onSubmit={this.handleSubmit}>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <div><h2>Add New Beer</h2></div>
            <div style={{display:"flex", flexDirection:"column", width:"70%", marginBottom:"10px"}}>
              <label style={{textAlign:"left"}} htmlFor="name">Name</label>
              <input style={{borderRadius:"50px", height:"20px", border:"solid 1px grey"}}
                id="name"
                onChange={this.handleChange}
                value={this.state.name}
                name="name"
                type="text"
              />
            </div>
            <div style={{display:"flex", flexDirection:"column", width:"70%", marginBottom:"10px"}}>
              <label style={{textAlign:"left"}} htmlFor="">Tagline</label>
              <input style={{borderRadius:"50px", height:"20px", border:"solid 1px grey"}}
                name="tagline"
                value={this.state.tagline}
                onChange={this.handleChange}
                type="text"
              />
            </div>
            <div style={{display:"flex", flexDirection:"column", width:"70%", marginBottom:"10px"}}>
              <label style={{textAlign:"left"}} htmlFor="">Description</label>
              <input style={{borderRadius:"50px", height:"20px", border:"solid 1px grey"}}
                onChange={this.handleChange}
                value={this.state.description}
                name="description"
                type="text"
              />
            </div>
            <div style={{display:"flex", flexDirection:"column", width:"70%", marginBottom:"10px"}}>
              <label style={{textAlign:"left"}} htmlFor="">First brewed</label>
              <input style={{borderRadius:"50px", height:"20px", border:"solid 1px grey"}}
                name="first_brewed"
                value={this.state.first_brewed}
                onChange={this.handleChange}
                type="text"
              />
            </div>
            <div style={{display:"flex", flexDirection:"column", width:"70%", marginBottom:"10px"}}>
              <label style={{textAlign:"left"}} htmlFor="">Brewers tips</label>
              <input style={{borderRadius:"50px", height:"20px", border:"solid 1px grey"}}
                name="brewers_tips"
                value={this.state.brewers_tips}
                onChange={this.handleChange}
                type="text"
              />
            </div>
            <div style={{display:"flex", flexDirection:"column", width:"70%", marginBottom:"10px"}}>
              <label style={{textAlign:"left"}} htmlFor="">Attenuation level</label>
              <input style={{borderRadius:"50px", height:"20px", border:"solid 1px grey"}}
                name="attenuation_level"
                value={this.state.attenuation_level}
                onChange={this.handleChange}
                type="Number"
              />
            </div>
            <div style={{display:"flex", flexDirection:"column", width:"70%", marginBottom:"10px"}}>
              <label style={{textAlign:"left"}} htmlFor="">Contributed by</label>
              <input style={{borderRadius:"50px", height:"20px", border:"solid 1px grey"}}
                name="contributed_by"
                value={this.state.contributed_by}
                onChange={this.handleChange}
                type="text"
              />
            </div>
            <button style={{borderRadius:"50px", height:"30px", width:"70%", marginTop:"10px", color:"white", backgroundColor:"black", fontWeight:"bold"}}>Add New</button>
            </div>
          </form>
        )
    }
}

export default NewBeer;
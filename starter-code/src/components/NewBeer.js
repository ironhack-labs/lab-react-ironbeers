import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class NewBeer extends Component {
        state = { 
            name: "", 
        tagline: "",
        description: "",
        brewed: "",
        tips: "",
        attenuation: "",
        contributed: ""
     };



        handleFormSubmit = event => {
            event.preventDefault();
            const name = this.state.name;
            const tagline = this.state.tagline;
            const description = this.state.description;
            const brewed = this.state.brewed;
            const tips = this.state.tips;
            const attenuation = this.state.attenuation;
            const contributed = this.state.contributed;
            axios
              .post('https://ih-beers-api2.herokuapp.com/beers/new', { name, tagline, description, brewed, tips, attenuation, contributed })
              .then(() => {
                this.setState({ name: "", tagline: "", description: "", brewed: "", tips: "", attenuation: "", contributed: "" });
              })
              .catch(error => console.log(error));
          };
        
          handleChange = event => {
            const { name, value } = event.target;
            this.setState({ [name]: value });
          };


render(){

    return (
        <>
         <header>
            <Link to='/' class="navbar navbar-light bg-info text-light">
            <h1>HOME</h1>
            </Link></header>

            <h1 className="position">Add your beer!</h1>

        <div>
        <form onSubmit={this.handleFormSubmit} className="position">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <label>Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={e => this.handleChange(e)}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
          />
          <label>First Brewed:</label>
          <input
            type="text"
            name="brewed"
            value={this.state.brewed}
            onChange={e => this.handleChange(e)}
          />
          <label>Brewer Tips:</label>
          <input
            type="text"
            name="tips"
            value={this.state.tips}
            onChange={e => this.handleChange(e)}
          />
          <label>Attenuation Level:</label>
          <input
            type="text"
            name="attenuation"
            value={this.state.attenuation}
            onChange={e => this.handleChange(e)}
          />
          <label>Contributed By:</label>
          <input
            type="text"
            name="contributed"
            value={this.state.contributed}
            onChange={e => this.handleChange(e)}
          />


          <input type="submit" value="Submit" />
        </form>
      </div>
           
        </>
        )
    }
}

export default NewBeer;
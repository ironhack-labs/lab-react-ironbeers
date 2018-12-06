import React, { Component } from "react";
import axios from "axios";
import "./newBeer.css";

class NewBeer extends Component {

    constructor(props){
        super(props);
        this.state ={
            name: "",
            tagline: "",
            description :"",
            first_brewed: "",
            brewers_tips: "",
            contributed_by: "",
            attenuation_level: 0
        }
    }


    sendData = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const tagline = this.state.tagline;
        const description = this.state.description;
        const first_brewed = this.state.first_brewed;
        const brewers_tips = this.state.brewers_tips;
        const contributed_by = this.state.contributed_by;
        const attenuation_level = this.state.attenuation_level;

      
        axios.post("https://ironbeer-api.herokuapp.com/beers/new", 
        { 
          name,tagline,first_brewed,description,brewers_tips,contributed_by,attenuation_level 
        }
        )
        .then( () => {
            // this.props.getData();
            this.setState({name: "",
            tagline: "",
            first_brewed: "",
            brewers_tips: "",
            contributed_by: "",
            attenuation_level: 0});
        })
        .catch( error => console.log(error) )
      }

    getData = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
    }


  render() {
    return (
      <div className="NewBeer">
        <form className="from-label" onSubmit={this.sendData}>
          <label>
            Name:
            <input  type="text" name="name"  value={this.state.title} onChange={ e => this.getData(e)} />
          </label>
          <label>
            Tagline:
            <input  type="text" name="tagline"  value={this.state.title} onChange={ e => this.getData(e)}/>
          </label>
          <label>
            Description:
            <textarea  type="textArea" name="description" value={this.state.title} onChange={ e => this.getData(e)}></textarea>
          </label>
          <label>
            First Brewed:
            <input  type="text" name="brewed" value={this.state.title} onChange={ e => this.getData(e)}/>
          </label>
          <label>
            Brewes Tips:
            <input  type="text" name="tips"  value={this.state.title} onChange={ e => this.getData(e)} />
          </label>
          <label>
            Attentuation Level:
            <input  type="text" name="level"  value={this.state.title} onChange={ e => this.getData(e)}/>
          </label>
          <label>
           Contributed By:
            <input  type="text" name="contributed"   value={this.state.title} onChange={ e => this.getData(e)}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewBeer;

import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';

class BeerForm extends Component {
    constructor(props){
      super(props);
      this.state = {};
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state
        axios.post("https://ironbeer-api.herokuapp.com/beers/new", { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }/*, {withCredentials:true}*/)
        .then( () => {
            // this.props.getData();
            this.setState({ name: "", tagline: "", description: "", first_brewed: "", brewers_tips: "", attenuation_level: "", contributed_by: "" });
        })
        .catch( error => console.log(error) )
      }
//{ name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }    

      handleChange = (event) => {  
          const {name, value} = event.target;
          this.setState({[name]: value});
      }

    // postBeer = () => {
    //   const { params } = this.props.match;
    //   axios.post(`https://ironbeer-api.herokuapp.com/beers/new`, {withCredentials:true})
    //   .then( responseFromApi =>{
    //     const theBeer = responseFromApi.data;
    //     this.setState(theBeer);
    //     console.log(this.state)
    //   })
    //   .catch((err)=>{
    //       console.log(err)
    //   })
    // }
  
    render(){
        //{ name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }    

      return(
        <div className="add-project">
            <h2>Make a Beer!</h2>
            <form onSubmit={this.handleFormSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
            <label>Tagline:</label>
            <input type="text" name="tagline" value={this.state.tagline} onChange={ e => this.handleChange(e)}/>
            <label>Description:</label>
            <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
            <label>First Brewed:</label>
            <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={ e => this.handleChange(e)}/>
            <label>Brewers Tips:</label>
            <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={ e => this.handleChange(e)}/>
            <label>Attenuation Level:</label>
            <input type="text" name="attenuation_level" value={this.state.attenuation_level} onChange={ e => this.handleChange(e)}/>
            <label>Contributed By:</label>
            <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={ e => this.handleChange(e)}/>
            
            <input type="submit" value="Submit" />
            </form>
        </div>
      )
    }
}  


export default BeerForm;
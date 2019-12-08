import React, {Component} from 'react';
import axios from 'axios';
import { FormNew } from "../../styles/componentStyles"; 

export default class NewBeer extends Component {
	state={
		form: {
			name: "",
			tagline: "",
			description: "",
			first_brewed: "",
			brewers_tips: "",
			attenuation_level: 0,
			contributed_by: ""
		}
	}
	
	submitNewBeer = async() =>{
		const {form} = this.state
	  await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", form)
		this.props.history.push(`/beers/`)
	}

	inputChange = ({ target: { value, name } }) => {
    this.setState({
			...this.state,
			form:{
				...this.state.form,
				[name]: value
			}
    });
  };

	form = async e => {
    e.preventDefault();

  };


	render(){
	const { name, 
			tagline, 
			description,
			first_brewed,
			brewers_tips, 
			attenuation_level, 
			contributed_by  
		} = this.state.form;
		return(
            <FormNew>
                 <div className="container">
                     <div className="col">
                        <label>Name</label>
	                        <input  onChange={this.inputChange} name="name"  type="text" value={name} className="inputname" />
                        <label>Tagline </label>
	                         <input  onChange={this.inputChange} name="tagline"  type="text" value={tagline} className="inputname"  />
	                    <label>Description </label>
	                         <input  onChange={this.inputChange} name="description" type="text" value={description} className="inputname" />
	                    <label>First Brewed </label>
	                         <input  onChange={this.inputChange} name="first_brewed"  type="text" value={first_brewed} className="inputname" />
                        <label>Brewers Tips </label>
	                         <input  onChange={this.inputChange} name="brewers_tips"  type="text" value={brewers_tips} className="inputname"  />
	                    <label>Attenuation Level </label>
	                         <input  onChange={this.inputChange} name="attenuation_level"  type="number" value={attenuation_level} className="inputname"  />
                        <label>Contributed by </label>
	                         <input  onChange={this.inputChange} name="contributed_by"  type="text" value={contributed_by} className="inputname"  />
                        <button onClick={this.submitNewBeer} type="submit" className="buy" >Submit</button>
                     </div> 
                 </div>
             </FormNew> 
		)
	}
}

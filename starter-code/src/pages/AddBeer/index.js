import React, { Component } from "react";
import axios from 'axios';
import { FormAdd } from "../../styles/components";

class AddBeer extends Component {
  state = {
    form: {
        name:"",
        tagline:"",
        first_brewed:"",
        attenuation_level: 0,
        description:"",
        contributed_by:""
    }
  };

  inputChange = ({ target: { value, name } }) =>{
    this.setState({
      ...this.state,
      form:{
        ...this.state.form,
        [name]: value 
      }
    });
  };
    
    addBeer= async e => {
    e.preventDefault();
    const { form } = this.state;
    const { data } = await axios.post(
      "https://ih-beers-api2.herokuapp.com/beers/new",form
    );
    alert("proyecto creado");
    this.setState({
      form: {
        name:"",
        tagline:"",
        first_brewed:"",
        attenuation_level: 0,
        description:"",
        contributed_by:""
    }
    })

  };

 

  render(){
    return(
      <FormAdd onSubmit={this.addBeer}>
          <h1 style={{marginTop: "100px"}}>
            Lista de cervezas
          </h1>
         <input
          name="name"
          type="text"
          value={this.state.form.name}
          onChange={this.inputChange}
          placeholder="Name"
        />
        <input
          name="tagline"
          type="text"
          value={this.state.form.tagline}
          onChange={this.inputChange}
          placeholder="TagLine"
        />
        <input
          name="description"
          type="text"
          value={this.state.form.description}
          onChange={this.inputChange}
          placeholder="Description"
        />
        <input
          name="first_brewed"
          type="text"
          value={this.state.form.first_brewed}
          onChange={this.inputChange}
          placeholder="first_brewed"
        />
        <label>attenuation_level</label>
        <input
          name="attenuation_level"
          type="number"
          value={this.state.form.attenuation_level}
          onChange={this.inputChange}
        />
        <input
          name="contributed_by"
          type="text"
          value={this.state.form.contributed_by}
          onChange={this.inputChange}
          placeholder="Contributed by"
        />

        <button>Submit</button>
      </FormAdd>
    )
  }






}//class

export default AddBeer;
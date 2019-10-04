import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { NavLink } from "react-router-dom";

export default class NewBeer extends Component {
  constructor(props) {
    super();
    this.state = {
      name:"",
      tagline : "",
      contributed_by:""
    }
  }
  updateFormData(e,field){
    let newState = {
      ...this.state
    };
    newState[field] = e.target.value;

    this.setState(newState);
  }

  sendState(e) {
    console.log(e)
    e.preventDefault();
    this.props.fromApp(this.state);
    return <Redirect to='/' />
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Name" name="name"  onChange={e => this.updateFormData(e, "name")} ></input>
        <input type="text" placeholder="Tagline" name="tagline"  onChange={e => this.updateFormData(e, "tagline")} ></input>
        <input type="text" placeholder="Created by" name="contributed_by"  onChange={e => this.updateFormData(e, "contributed_by")}></input>
        <button to="/" onClick={e => this.sendState(e)}>Submit</button>
      </form>
    )
  }
}

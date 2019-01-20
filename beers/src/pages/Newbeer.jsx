import React from "react";
import { Input } from "../components/Input";
import { newOne } from "../lib/beerApi";
import {Redirect } from 'react-router'
const info = {
  brewers_tips: "",
  name: "",
  contributed_by: "",
  description: "",
  tagline: "",
  attenuation_level: "",
  first_brewed: ""
};
export class Newbeer extends React.Component {
  constructor() {
    super();
    this.state = {
      info,
      created:false
    };
  }

  submitInfo = () => {
    const {info,created} = this.state
    let { attenuation_level } = this.state.info;
    attenuation_level = parseInt(attenuation_level);
    if(isNaN(attenuation_level)){
        alert("attenuation_level has to be a number")
    }else{
        newOne(info).then(e=>{if(e.status===200){
            this.setState({created:!created})
        }else{
            alert(`error ${e.status}`)
        }})
    }
  };

  handleChange = (e, infoname) => {
    const { info } = this.state;
    info[infoname] = e.target.value;
    this.setState({ info: this.state.info });
  };

  render() {
      const{created}=this.state
    const {
      brewers_tips,
      name,
      contributed_by,
      description,
      tagline,
      attenuation_level,
      first_brewed
    } = this.state.info;
    return (
      <div className="container">
        <Input data={name} infoname="name" func={this.handleChange} />
        <Input data={tagline} infoname="tagline" func={this.handleChange} />
        <Input
          data={attenuation_level}
          infoname="attenuation_level"
          func={this.handleChange}
        />
        <Input
          data={first_brewed}
          infoname="first_brewed"
          func={this.handleChange}
        />
        <Input
          data={contributed_by}
          infoname="contributed_by"
          func={this.handleChange}
        />
        <Input
          data={brewers_tips}
          infoname="brewers_tips"
          func={this.handleChange}
        />
        <Input
          data={description}
          infoname="description"
          func={this.handleChange}
        />
        <button
          className="button is-primary is-rounded"
          onClick={() => this.submitInfo()}
        >
          Add the beer
        </button>
        {created ? <Redirect to="/"/>:null}
      </div>
    );
  }
}

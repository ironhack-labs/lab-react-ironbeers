import React from "react";
import axios from "axios";
import { Route, Redirect } from "react-router";

class New extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: ''
    };
    this.updateState = this.updateState.bind(this);
    this.handleFormSubmit  = this.handleFormSubmit.bind(this);
  }
  componentDidMount() {
    axios
      .post("https://ironbeer-api.herokuapp.com/beers/random")
      .then(response => {
        this.setState({ beers: response.data });
      });
  }

  updateState(e){
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value }, () => {
      console.log(this.state);
    })
  }
  
  handleFormSubmit(event){
    event.preventDefault();
    axios.post("https://ironbeer-api.herokuapp.com/beers", this.state)
    .then(response => {console.log(response)})
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleFormSubmit}>
          <label>Beer Name</label>
          <br />
          <input name="name" type="text" value='' /> <br />
          <label >Tag Line</label>
          <br />
          <input name="tagline" type="text" value='' /> <br />
          <label>first_brewed</label>
          <br />
          <input name="first_brewed" type="text" value='' /> <br />
          <label>description</label>
          <br />
          <input name="description" type="text" value='' /> <br />
          <label>image_url</label>
          <br />
          <input name="image_url" type="text" value='' /> <br />
          <label>brewers_tips</label>
          <br />
          <input name="brewers_tips" type="text" value='' /> <br />
          <label>contributed_by</label>
          <br />
          <input name="contributed_by" type="text" value='' /> <br />
          <label>attenuation_level</label>
          <br />
          <input name="attenuation_level" type="text" value='' /> <br />
          <button type="button button-primary" value=''>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default New;

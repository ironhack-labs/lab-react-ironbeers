import React from "react";
import { postData } from "../lib/postData.js";
import InputForm from "../components/InputForm";
import TextAreaForm from "../components/TextAreaForm";

export default class NewBeer extends React.Component {
  constructor() {
    super();
    this.state = {
      newBeer: {
        name: null,
        tagline: null,
        description: null,
        first_brewed: null,
        brewers_tips: null,
        attenuation_level: null,
        contributed_by: null
      },
      response: null,
      err: null
    };
  }

  handleChange(input, name) {
    this.state.newBeer[name] = input;
    console.log(this.state.newBeer);
    this.setState({ newBeer: this.state.newBeer });
  }

  handleAdd() {
    postData(this.state.newBeer)
      .then(response => {
        console.log(response);
        this.setState({ response });
      })
      .catch(err => {
        this.setState({ err });
      });
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="container form">
            <InputForm
              label="Name"
              placeholder="Enter the beer name"
              onChange={input => this.handleChange(input, "name")}
              initValue={()=>this.resetValues()}
            />
            <InputForm
              label="Tagline"
              placeholder="Enter a tagline"
              onChange={input => this.handleChange(input, "tagline")}
            />

            <TextAreaForm
              label="Description"
              placeholder="Give the best description"
              onChange={input => this.handleChange(input, "description")}
            />
            <InputForm
              label="First Brewed"
              placeholder="When was the first brew"
              onChange={input => this.handleChange(input, "first_brewed")}
            />

            <InputForm
              label="Brewers Tips"
              placeholder="Give some tips"
              onChange={input => this.handleChange(input, "brewers_tips")}
            />

            <InputForm
              label="Attenuation Level"
              placeholder="Number of attenuation"
              onChange={input => this.handleChange(input, "attenuation_level")}
            />

            <InputForm
              label="Contributed by"
              placeholder="Your name"
              onChange={input => this.handleChange(input, "contributed_by")}
            />
            <button
              className="button is-warning "
              onClick={() => this.handleAdd()}
            >
              Add
            </button>

            {this.state.response ? (
              <div className="container">
                <article className="message is-danger">
                  <div className="message-body">
                    {this.state.response["message"]}
                  </div>
                </article>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

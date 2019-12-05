import React, { Component } from "react";
import Navigation from "./Navigation";

export default class NewBeer extends Component {


  render() {
    return (
      <div className="new-beer">
        <Navigation></Navigation>

        <div className="section">
          <div className="container">
            <form onSubmit={(e) => this.props.addNewBeer(e)}>
              <div className="field">
                <label className="label has-text-left has-text-left" htmlFor="name">
                  Name:
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                  value="Estrella Levante"
                  onChange={(e)  => this.props.onChange(e)}
                />
              </div>

              <div className="field">
                <label className="label has-text-left" htmlFor="tagline">
                  Tagline:
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Tagline"
                  id="tagline"
                  name="tagline"
                  value="Lorem ipsum dolor sit amet"
                  onChange={(e)  => this.props.onChange(e)}
                />
              </div>

              <div className="field">
                <label className="label has-text-left" htmlFor="description">
                  Description:
                </label>
                <textarea
                  className="textarea"
                  type="text"
                  placeholder="Add a description"
                  id="description"
                  name="description"
                  value="Lorem ipsum dolor sit amet"
                  onChange={(e)  => this.props.onChange(e)}
             />
              </div>

              <div className="field">
                <label className="label has-text-left" htmlFor="first-brewed">
                  First brewed:
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="First brewed"
                  id="first-brewed"
                  name="first_brewed"
                  value="983475"
                  onChange={(e)  => this.props.onChange(e)}
             />
              </div>

              <div className="field">
                <label className="label has-text-left" htmlFor="brewers-tips">
                  Brewers tips:
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Brewers tips"
                  id="brewers-tips"
                  name="brewers_tips"
                  value="Lorem ipsum dolor sit amet"
                  onChange={(e)  => this.props.onChange(e)}
             />
              </div>

              <div className="field">
                <label className="label has-text-left" htmlFor="attenuation-level">
                  Attenuation level:
                </label>
                <input
                  className="input"
                  type="number"
                  placeholder="Attenuation level"
                  id="attenuation-level"
                  name="attenuation_level"
                  value="100"
                  onChange={(e)  => this.props.onChange(e)}
                />
              </div>

              <div className="field">
                <label className="label has-text-left" htmlFor="contributed-by">
                  Contributed by:
                </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Contributor"
                  id="contributed-by"
                  name="contributed_by"
                  value="Jane Doe"
                  onChange={(e)  => this.props.onChange(e)}
                />
              </div>

              <button
                className="button is-rounded is-info"
                type="submit"
              >
                Add New Beer
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import Header from '../Header/Header';
import "./NewBeer.css";

export default class NewBeer extends Component {

    state = {
            name: '',
            tagline: '',
            description: '', 
            firstBrewed: '',
            brewersTips: '',
            attenuation: 0,
            contributed: '',
    }

     handleSubmit = (e) => {
        e.preventDefault();
        const newBeer = {
          name: this.state.name,
          tagline: this.state.tagline,
          description: this.state.description,
          first_brewed: this.state.firstBrewed,
          brewers_tips: this.state.brewersTips,
          attenuation_level: Number(this.state.attenuation),
          contributed_by: this.state.contributed,
        };
        console.log(newBeer);
        fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
            method: 'post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newBeer),
        }).then((res) => res.json())
        .then((result) => console.log(result))
        .catch((e) => console.log(e))
    }

    handleInput = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {
        return (
          <div>
            <Header />
            <div className="newbeer-container">
              <form
                className="newbeer-form"
                onSubmit={(e) => this.handleSubmit(e)}
              >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={(e) => this.handleInput(e)}
                />
                <label htmlFor="tagline">Tagline</label>
                <input
                  type="text"
                  name="tagline"
                  value={this.state.tagline}
                  onChange={(e) => this.handleInput(e)}
                />
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  cols="30"
                  rows="10"
                  value={this.state.description}
                  onChange={(e) => this.handleInput(e)}
                />
                <label htmlFor="firstBrewed">First Brewed</label>
                <input
                  type="text"
                  name="firstBrewed"
                  value={this.state.firstBrewed}
                  onChange={(e) => this.handleInput(e)}
                />
                <label htmlFor="brewersTips">Brewers Tips</label>
                <input
                  type="text"
                  name="brewersTips"
                  value={this.state.brewersTips}
                  onChange={(e) => this.handleInput(e)}
                />
                <label htmlFor="attenuation">Attenuation Level</label>
                <input
                  type="number"
                  name="attenuation"
                  value={this.state.attenuation}
                  onChange={(e) => this.handleInput(e)}
                />
                <label htmlFor="contributed">Contributed By</label>
                <input
                  type="text"
                  name="contributed"
                  value={this.state.contributed}
                  onChange={(e) => this.handleInput(e)}
                />
                <button className="newbeer-button" type="submit">ADD NEW</button>
              </form>
            </div>
          </div>
        );
    }
}

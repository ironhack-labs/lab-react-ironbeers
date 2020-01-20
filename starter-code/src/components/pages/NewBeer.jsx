import React, { Component } from 'react';
import axios from 'axios';
import qs from "qs";

export class NewBeer extends Component {
constructor(props){
    super(props)
    this.state = {
    beer:{
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        attenuation_level: 0,
        contributed_by: ''
    }
}
this.handleAddBeerSubmit = this.handleAddBeerSubmit.bind(this);
this.inputOnChangeHandler = this.inputOnChangeHandler.bind(this);
}

  handleAddBeerSubmit() {
    console.log(this.state.beer);
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/beers/new`,
      data: qs.stringify(this.state.beer),
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    })
      .then(response => {
        console.log(response);
        this.props.history.push(`/beers/detail/${response.data._id}`);
      })
      .catch(error => error.data);
  }


    inputOnChangeHandler(e) {
        console.log(this.state.beer);
        let beerCopy = {...this.state.beer};
        beerCopy[e.target.name] = e.target.value;
        console.log(this.state.beer)
        this.setState({
            beer:beerCopy
        })
    }

    render() {

        return (
        <div className="columns">
         <div className="column is-half is-offset-3">
                <div className="container has-padding-left-30 has padding-right-30">
                    <h2 className="is-size-2 has-padding-25">Add a new beer</h2>
                    <label>Name:</label>
                    <div className="field">
                    <div className="control">
                    <input className="input is-info"
						type="text"
						name="name"
						value={this.state.beer.name}
                        placeholder="name"
						onChange={this.inputOnChangeHandler}
					/>
                    </div>
                    </div>
                    <label>Tagline:</label>
                    <div className="field">
                    <div className="control">
                    <input className="input is-info"
						type="text"
						name="tagline"
						value={this.state.beer.tagline}
                        placeholder="tagline"
						onChange={this.inputOnChangeHandler}
					/>
                    </div>
                    </div>
                    <label>Description:</label>
                    <div className="field">
                    <div className="control">
                    <input className="input is-info" 
						type="text"
						name="description"
						value={this.state.beer.description}
                        placeholder="description"
						onChange={this.inputOnChangeHandler}
					/>
                    </div>
                    </div>
                    <label>First brewed:</label>
                    <div className="field">
                    <div className="control">
                    <input className="input is-info"
						type="text"
						name="first_brewed"
						value={this.state.beer.first_brewed}
                        placeholder="first brewed"
						onChange={this.inputOnChangeHandler}
					/>
                    </div>
                    </div>
                    <label>Brewers tips:</label>
                    <div className="field">
                    <div className="control">
                    <input className="input is-info"
						type="text"
						name="brewers_tips"
						value={this.state.beer.brewers_tips}
                        placeholder="brewers tips"
						onChange={this.inputOnChangeHandler}
					/>
                    </div>
                    </div>
                    <label>Alcohol % :</label>
                    <div className="field">
                    <div className="control">
                    <input className="input is-info"
						type="number"
						name="attenuation_level"
						value={this.state.beer.attenuation_level}
                        placeholder="alcohol %"
						onChange={this.inputOnChangeHandler}
					/>
                    </div>
                    </div>
                    <label>Created by:</label>
                    <div className="field">
                    <div className="control">
                    <input className="input is-info"
						type="text"
						name="contributed_by"
						value={this.state.beer.contributed_by}
                        placeholder="Created by"
						onChange={this.inputOnChangeHandler}
					/>
                    </div>
                    </div>
                    <div>
                    <button className="button is-link" onClick={this.handleAddBeerSubmit}>Submit</button>
                    </div>
                </div>
                </div>
                </div>
        );
    }
}

export default NewBeer;


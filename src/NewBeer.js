import React, { Component } from 'react';
import axios from 'axios';

class NewBeer extends Component {

    state = {
        showForm: false,
        name: ""
      }


      tuggleForm = () => {
          this.setState({ showForm: !this.state.showForm  });
      }

      handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitHandler = async (event) => {
        event.preventDefault()
        let res = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new',this.state)

        this.setState({ showForm: false  });

        console.log(res);
    }
    
    
    render() {
        return (
            <div>
                <button onClick={this.tuggleForm}>NewBeer</button>
                { this.state.showForm ? 

                <form method="post" onSubmit={this.submitHandler}>
                    <label for="beerName">Beer Name:</label>
                    <input onChange = {this.handleChange} type="text" name="name" value= {this.state.name} id="beerName" />
                    <br />
                    <label for="tagline">Tagline:</label>
                    <input onChange = {this.handleChange} type="text" name="tagline" id="tagline" />
                    <br />
                    <label for="descr">Description:</label>
                    <input onChange = {this.handleChange} type="text" name="description" id="descr" />
                    <br />
                    <label for="first_brewed">First Brewed:</label>
                    <input onChange = {this.handleChange} type="text" name="first_brewed" id="first_brewed"/>
                    <br />
                    <label for="brewers_tips">Brewers Tips</label>
                    <input onChange = {this.handleChange} type="text" name="brewers_tips" id="brewers_tips" />
                    <br />
                    <label for="att_level">Attenuation level</label>
                    <input onChange = {this.handleChange} type="number" name="attenuation_level" id="att_level" />
                    <br />
                    <label for="contri_by">Contributed by</label>
                    <input onChange = {this.handleChange} type="text" name="contributed_by" id="contri_by" />
                    <br />
                    <input type="submit" value= "Submit"/>
                </form> : " " }
            </div>
        );
    }
}

export default NewBeer;
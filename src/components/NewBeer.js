import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
export class NewBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: 0,
          contributed_by: '',
        };
      }
    
      handleChange = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.value });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
          .then((response) => console.log(response.data));
      };
    
      render() {
        return (       
            <div>
            <Header/>
            <div>
              <h2>Add a new beer</h2>
              <form onSubmit={this.handleSubmit}>
               <div>
                  <label >Name</label>
                  <input type="text" name="name"  onChange={this.handleChange} value={this.state.name} className="form-control"
                  />
                </div>
               <div>
                  <label >Tagline</label>
                  <input type="text" name="tagline" onChange={this.handleChange} value={this.state.tagline}  className="form-control"
                  />
                </div>
               <div>
                  <label >Description</label>
                  <input type="text" name="description" onChange={this.handleChange} value={this.state.description} className="form-control"
                  />
                </div>
               <div>
                  <label >First brewed</label>
                  <input type="text" name="first_brewed" onChange={this.handleChange} value={this.state.first_brewed} className="form-control"
                  />
                </div>
               <div>
                  <label >Brewer tips</label>
                  <input type="text" name="brewers_tips" onChange={this.handleChange} value={this.state.brewers_tips} className="form-control"
                  />
                </div>
               <div>
                  <label >Attenuation level</label>
                  <input type="number" name="attenuation_level" onChange={this.handleChange} value={this.state.attenuation_level} className="form-control"
                  />
                </div>
               <div>
                  <label>Contributed by</label>
                  <input type="text" name="contributed_by" onChange={this.handleChange} value={this.state.contributed_by} className="form-control"
                  />
                </div>
                <input type="submit" value="Create beer" className="btn  btn-dark"/>
              </form>
            </div>
          </div>
        );
      }
    }

export default NewBeer

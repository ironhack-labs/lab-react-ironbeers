import React, { Component } from 'react';
import './new-beer.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class NewBeer extends Component {
    constructor(props){
        super(props);
        this.beer = {...this.props.newBeer};
    }
    changeObj = (e) => {
        for(let i in this.beer){
            if(i === e.target.name){
               
                this.beer[i] = e.target.value;
            }
        }
      this.props.setBeer(this.beer);
    }
    submitForm = (e) => {
        e.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new',this.beer)
        .then((beer) => {
          console.log('posted success')
        })
        .catch((err)=>{
          console.log(err);
        })
        this.props.resetBeer();
    }
    render() {
        return (
            <div className="new-beer-page">
              <Link className="homeIcon" to="/home"><img src="/images/home.png" /></Link>
              <div className="form-section" >
                 <form onSubmit={this.submitForm}>
                    <div className="field-group">
                        <div className="fields">
                           <label htmlFor="newFoodName">Name</label>
                           <input type="text"
                                  name="name"
                                  value={this.props.newBeer.name}
                                  onChange={this.changeObj}
                                  placeholder="Enter name"
                             />
                        </div>
                        <div className="fields">
                           <label htmlFor="newCalories">Tagline</label>
                           <input type="text"
                                  name="tag_line"
                                  value={this.props.newBeer.tag_line}
                                  onChange={this.changeObj}
                                  placeholder="Enter Tag_line"
                            />
                        </div>
                        <div className="fields">
                           <label htmlFor="newImageUrl">Description</label>
                           <input type="text"
                                  name="description"
                                  value={this.props.newBeer.description}
                                  onChange={this.changeObj}
                                  placeholder="Enter description"
                           />
                       </div>
                       <div className="fields">
                           <label htmlFor="newImageUrl">First_brewed</label>
                           <input type="text"
                                  name="first_brewed"
                                  value={this.props.newBeer.first_brewed}
                                  onChange={this.changeObj}
                                  placeholder="Enter first_brewed"
                            />
                       </div>
                       <div className="fields">
                           <label htmlFor="newImageUrl">Brewers_tips</label>
                           <input type="text"
                                  name="brewers_tips"
                                  value={this.props.newBeer.brewers_tips}
                                  onChange={this.changeObj}
                                  placeholder="Enter brewers_tips"
                            />
                       </div>
                       <div className="fields">
                           <label htmlFor="newImageUrl">Attenuation_level</label>
                           <input type="text"
                                  name="attenuation_levels"
                                  value={this.props.newBeer.attenuation_levels}
                                  onChange={this.changeObj}
                                  placeholder="Enter attenuation_levels"
                            />
                       </div>
                       <div className="fields">
                           <label htmlFor="newImageUrl">Contributed_by</label>
                           <input type="text"
                                  name="contributed_by"
                                  value={this.props.contributed_by}
                                  onChange={this.changeObj}
                                  placeholder="Enter contributed_by"
                            />
                       </div>
                    </div>
                    <div className="submit">
                       <input type="submit" onClick={this.submitForm} value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

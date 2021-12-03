import React, { Component } from 'react'
import BeerService from '../../services/beer.services'

class CreatBeer extends Component {
    constructor() {
      super();
      this.state = {
        beers: beers,
        creating: true,
        name: "",
        tagline: "",
        image_url:"", 
        first_brewed:"",
        attenuation_level:"",
        description: "",
        contributed_by:""
      };
    }
  
    AddBeer() {   
      this.setState({
        creating: true,
      });
    }
  
    handleChange = (e) =>{
        let { name, value } = e.currentTarget
        this.setState({
            [name] : value
        })
    }
  
    SubmitBeer = (e) => {   
        e.preventDefault();
  
        this.state.beers.push({name: this.state.name, tagline: this.state.tagline, image_url: this.state.image_url, first_brewed: this.state.first_brewed, attenuation_level: this.state.attenuation_level, description: this.state.description, contributed_by: this.state.contributed_by });
  
       this.setState({
        beers: beers,
        creating: false,
        name: "",
        tagline: "",
        image_url:"", 
        first_brewed:"",
        attenuation_level:"",
        description: "",
        contributed_by:""
    }
    }
  
  AddList(elm){
      console.log(elm)
  }

  render() {

    return (
        <>
        {this.state.creating ? 
            <div>
            <form onSubmit={this.SubmitFood} >
                <label>
                   Name: <input onChange={this.handleChange} value={this.state.name} type="text" name="name" />
                </label>
                <label>
                Calories: <input onChange={this.handleChange} value={this.state.calories} type="text" name="calories" />
                </label>
                <label>
                    Image: <input onChange={this.handleChange} value={this.state.image} type="text" name="image" />
                </label>
                <input type="submit" value="Crear food" />
            </form>
            </div> 
            : 
            <div> 
                <button onClick={() => this.AddBeer()}>Add Food</button>
            </div>
        
        }
        
       { this.state.foods.map((elm) => <FoodItem food={elm} />)}
         </>
    )
  }
}

export default CreatBeer
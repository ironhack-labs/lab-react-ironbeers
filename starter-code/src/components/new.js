import React, { Component } from "react";
import Header from "./header";
import axios from "axios";

class NewBeer extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            contributed_by: ""
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        
        let newBeer = this.state;

        axios.post("https://ih-beers-api.herokuapp.com/beers/new", newBeer)
        .then(response=>{            
            this.props.history.push("/beers")
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render(){
        return(
            <div>
                <Header />
                <form class="form-inline" onSubmit={this.submitHandler} id="new-form">
                <div>
                <label for="name">Name</label>
                <input type="text" class="form-control" name="name" onChange={this.changeHandler}/>
                </div>
                <div>
                <label for="tagline">Tagline</label>
                <input type="text" class="form-control" name="tagline" onChange={this.changeHandler}/>
                </div>
                <div>
                <label for="description">Description</label>
                <input type="text" class="form-control" name="description" onChange={this.changeHandler}/>
                </div>
                <div>
                <label for="first_brewed">First_Brewed</label>
                <input type="date" class="form-control" name="first_brewed" onChange={this.changeHandler}/>
                </div>
                <div>
                <label for="brewers_tips">Brewers_Tips</label>
                <input type="text" class="form-control" name="brewers_tips" onChange={this.changeHandler}/>
                </div>
                <div>
                <label for="attenuation_level">Attenuation_Levels</label>
                <input type="number" class="form-control" name="attenuation_level" onChange={this.changeHandler}/>
                </div>
                <div>
                <label for="contributed_by">Contributed_by</label>
                <input type="text" class="form-control" name="contributed_by" onChange={this.changeHandler}/>
                </div>
                <div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
        )
    }
}

export default NewBeer;
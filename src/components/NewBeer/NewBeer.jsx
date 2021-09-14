import React from "react"
import "./NewBeer.css"
import Header from "../Header/Header"
import axios from "axios"

const initialState = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
}

export default class NewBeer extends React.Component{
    state= {
        ...initialState,
    }


    onChange = (event) => {
        const { name, value, type } = event.target;
    
        this.setState({
          [name]: type === 'number' ? Number(value) : value,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        if (!this.state) {
          return;
        }
        axios
          .post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state)
          .then((response) => {
            console.log(response);
          })
          .catch((err) => console.log(err));
        this.setState({ ...initialState });
      };

    render(){
        return(
            <div className="NewBeer">
                <Header/>
                <form className="NewBeer__form" onSubmit={this.onSubmit}>
                    <div>
                    <label>Beer Name</label>
                    <input type="text" placeholder="Insert beer name" name="name" value={this.state.name} onChange={this.onChange}/>
                    </div>
                    <div>
                    <label>Tagline</label>
                    <input type="text" placeholder="Insert beer tagline" name="tagline" value={this.state.tagline} onChange={this.onChange}/>
                    </div>
                    <div> 
                    <label>Description</label>
                    <input type="text" placeholder="Insert beer description" name="description" value={this.state.description} onChange={this.onChange}/>
                    </div>
                    <div>
                    <label>Brew date</label>
                    <input type="text" placeholder="Insert first brewed date" name="first_brewed" value={this.state.first_brewed} onChange={this.onChange}/>
                    </div>
                    <div>
                    <label>Brewer tips</label>
                    <input type="text" placeholder="Insert brewers tips" name="brewers_tips" value={this.state.brewers_tips} onChange={this.onChange}/>
                    </div>
                    <div>
                    <label>Attenuation</label>
                    <input type="number" placeholder="Ej: 0" name="attenuation_level" value={this.state.attenuation_level} onChange={this.onChange}/>
                    </div>
                    <div>
                    <label>Contributor</label>
                    <input type="text" placeholder="Insert contributor name" name="contributed_by" value={this.state.contributed_by} onChange={this.onChange}/>
                    </div>
                    <button>Submit new beer</button>
                </form>
            </div>
        )
    }
}
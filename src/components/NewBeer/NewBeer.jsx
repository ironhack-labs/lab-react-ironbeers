import React from 'react'
import { Link } from 'react-router-dom';
import "./NewBeers.css"
import axios from 'axios';

class NewBeer extends React.Component {
    
state = {
    name: '',
    tagline: '', 
    description: '',
    first_brewed: '', 
    brewers_tips: '', 
    attenuation_level: 0,
    contributed_by : '',
}

handleTextChange = (event) => {
const {name, value} = event.target;
console.log(this.state);
this.setState({
    [name]: value,
});
};

handleSubmit = (event) => {
    event.preventDefault();

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state).then((res) => {
        console.log(res)
    })

    };

render () {
    return (
        <div className="form__newBeer">
             <Link to="/">Home</Link>
             <form onSubmit={this.handleSubmit}>
                 <label >name</label>
                 <input type="text" onChange={this.handleTextChange} value={this.state.name} name="name"  placeholder="Name of Beer" />
                 <br/>
                 <label>tagline</label>
                 <input type="text" onChange={this.handleTextChange} value={this.state.tagline} name="tagline"  placeholder="Tagline" />
                 <br/>
                 <label>description</label>
                 <input type="text" onChange={this.handleTextChange} value={this.state.description} name="description"  placeholder="description" />
                 <br/>
                 <label>first brewed</label>
                 <input type="text" onChange={this.handleTextChange} value={this.state.first_brewed} name="first_brewed"  placeholder="first brewed" />
                 <br/>
                 <label>brewers_tips</label>
                 <input type="text" onChange={this.handleTextChange} value={this.state.brewers_tips} name="brewers_tips"  placeholder="brewers_tips" />
                 <br/>
                 <label>attenuation_level</label>
                 <input type="number" onChange={this.handleTextChange} value={this.state.attenuation_level} name="attenuation_level"  placeholder="attenuation_level" />
                 <br/>
                 <label>contributed_by</label>
                 <input type="text" onChange={this.handleTextChange} value={this.state.contributed_by} name="contributed_by"  placeholder="contributed_by" />
                 <button type="submit">Add New Beer</button>
             </form>
        </div>
    )
}
}

export default NewBeer

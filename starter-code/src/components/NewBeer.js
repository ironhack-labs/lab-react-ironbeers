import React, {Component} from 'react';
import NavBar from './NavBar';
import axios from 'axios';
 
export default class NewBeer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            contributed_by: "",
        };

       //this.handleInput = this.handleInput.bind(this);

    }

    handleInput = e => {
        console.log(e);
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };
  
    handleFormSubmit = event => {
        event.preventDefault();
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
            .then( () => {
                this.setState({
                    name: "",
                    tagline: "",
                    description: "",
                    first_brewed: "",
                    brewers_tips: "",
                    attenuation_level: 0,
                    contributed_by: "",
                })
                this.props.history.push('/beers');
            })

    };


    render() {
        const { name, tagline, description, first_brewed, brewers_tips, 
            attenuation_level, contributed_by } = this.state;
        
        return(

            <div>
                <NavBar/>
                <form onSubmit={this.handleFormSubmit}>
                  
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={this.handleInput}
                        className="name_input"
                    />
    
                    {/* tagline */}
                    <label htmlFor="tagline">Tagline</label>
                    <input 
                        type="text" 
                        name="tagline"
                        value={tagline}
                        onChange={this.handleInput} 
                        className="tagline_input"
                    />

                    {/* description */}
                    <label htmlFor="description">Description</label>
                    <input 
                        type="text" 
                        name="description" 
                        value={description}
                        onChange={this.handleInput} 
                        className="description_input"
                    />

                    {/* first_brewed */}
                    <label htmlFor="first_brewed">First Brewed</label>
                    <input 
                        type="text" 
                        name="first_brewed" 
                        className="first_brewed_input"
                        value={first_brewed}
                        onChange={this.handleInput} 
                    />

                    {/* brewers_tips */}
                    <label htmlFor="brewers_tips">Brewers Tips</label>
                    <input 
                        type="text" 
                        name="brewers_tips" 
                        className="tips_input"
                        value={brewers_tips}
                        onChange={this.handleInput} 
                    />

                    {/* attenuation_level */}
                    <label htmlFor="attenuation_level">Attenuation Level</label>
                    <input 
                        type="number" 
                        name="attenuation_level" 
                        className="attenuation_input"
                        value={attenuation_level}
                        onChange={this.handleInput}
                    />

                    {/* contributed_by */}
                    <label htmlFor="brewers_tips">Contributed By</label>
                    <input 
                        type="text" 
                        name="contributed_by" 
                        className="contributed_input"
                        value={contributed_by}
                        onChange={this.handleInput}
                    />

                    <input type="submit" value="SUBMIT" className="add_btn"/>

                </form>
            </div>





        );
    }

} 
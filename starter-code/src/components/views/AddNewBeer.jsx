import React, {Component} from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar'

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



    }

    handleInput = e => {
        // console.log(e);
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
            <React.Fragment>
             <NavBar />
            <div className="form-container">
            
                <form onSubmit={this.handleFormSubmit}>

                    <div className="input-container">
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={this.handleInput}
                        className="name_input"
                    />
                    </div>
                    
                    <div className="input-container">
                    <label>Tagline</label>
                    <input 
                        type="text" 
                        name="tagline"
                        value={tagline}
                        onChange={this.handleInput} 
                        className="tagline_input"
                    />
                    </div>

                     <div className="input-container">
                    <label>Description</label>
                    <textarea 
                        rows="8" 
                        type="text" 
                        name="description" 
                        value={description}
                        onChange={this.handleInput} 
                        className="description_input"
                    />
                    </div>

                   <div className="input-container">
                    <label>First Brewed</label>
                    <input 
                        type="text" 
                        name="first_brewed" 
                        className="first_brewed_input"
                        value={first_brewed}
                        onChange={this.handleInput} 
                    />
                    </div>

                    <div className="input-container">
                    <label>Brewers Tips</label>
                    <input 
                        type="text" 
                        name="brewers_tips" 
                        className="tips_input"
                        value={brewers_tips}
                        onChange={this.handleInput} 
                    />
                    </div>

                    <div className="input-container">
                    <label>Attenuation Level</label>
                    <input 
                        type="number" 
                        name="attenuation_level" 
                        className="attenuation_input"
                        value={attenuation_level}
                        onChange={this.handleInput}
                    />
                    </div>

                     <div className="input-container">
                    <label>Contributed By</label>
                    <input 
                        type="text" 
                        name="contributed_by" 
                        className="contributed_input"
                        value={contributed_by}
                        onChange={this.handleInput}
                    />
                    </div>
                    <div className="btn-container">
                    <input type="submit" value="ADD NEW" className="btn"/>
                    </div>
                </form>
            </div>



</React.Fragment>

        );
    }

}  
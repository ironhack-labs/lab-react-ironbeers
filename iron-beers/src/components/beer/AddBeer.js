import React, { Component } from 'react';
import axios from 'axios';

class AddBeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: '',

        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        const values = {...this.state}
    
        // this.setState({''});
        console.log(this.state)
        // axios.post("https://api.punkapi.com/v2/beers/new", { values})
        // .then(() => {
            
        //     })
        //     .catch(error => console.log(error))
    }

    render() {
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
        return (
            <div className="container">
                <div className='m-10'>
                    <form className="field" onSubmit={this.handleFormSubmit}>
                        <div className="content control">
                            <label className="label">Name</label>
                            <input className="input" name="name" type="text" placeholder="Maris Beer" onChange={this.handleChange}></input>
                        </div>
                        <div className="content control">
                            <label className="label">Tagline</label>
                            <input className="input" name="tagline" type="text" placeholder="Be creative" onChange={this.handleChange}></input>
                        </div>
                        <div className="content control">
                            <label className="label">Description</label>
                            <textarea className="textarea" name="description" placeholder="e.g. Best beer ever!" rows="7" onChange={this.handleChange}></textarea>
                        </div>
                        <div className="content control">
                            <label className="label">First Brewed</label>
                            <input className="input" type="text" name="first_brewed" placeholder="e.g. 09/2007" onChange={this.handleChange}></input>
                        </div>
                        <div className="content control">
                            <label className="label">Brewers Tips</label>
                            <input className="input" type="text" name="brewers_tips" placeholder="e.g. The earthy and floral aromas from the.." onChange={this.handleChange}></input>
                        </div>
                        <div className="content control">
                            <label className="label">Attenuation Level</label>
                            <input className="input" type="text" name="attenuation_level" placeholder="e.g. 75" onChange={this.handleChange}></input>
                        </div>
                        <div className="content control">
                            <label className="label">Contributed by</label>
                            <input className="input" type="text" name="contributed_by" placeholder="e.g. Mariana Macedo" onChange={this.handleChange}></input>
                        </div>
                        <div className="control">
                            <input type="submit" value="Add new" className="button is-warning is-uppercase has-text-weight-semibold w-100" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddBeer;

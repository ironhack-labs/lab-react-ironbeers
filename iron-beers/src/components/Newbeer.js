import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Newbeer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: "",
            contributed_by: "",
        }
    }

    handleChange(event) {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
        console.log({ name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
        axios.post("https://ironbeer-api.herokuapp.com/beers/new", { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
            .then(() => {
                // this.props.getData();
                this.setState({
                    name: "",
                    tagline: "",
                    description: "",
                    first_brewed: "",
                    brewers_tips: "",
                    attenuation_level: "",
                    contributed_by: "",
                });
            })
            .catch(error => console.log(error))
    }


render() {
    return (
        <div>
            <header className="header-component">
                <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymKW7blR5IoWJz4L9BuXeng1G3jPF3F-M1eQ7mQURgnsHm42d" alt="home-img"></img></Link>
            </header>
            <form onSubmit={this.handleFormSubmit.bind(this)}>
                <label>Name</label><input type='text' name='name' value={this.state.name} onChange={(e) => this.handleChange(e)} />
                <label>Tagline</label><input type='text' name='tagline' value={this.state.tagline} onChange={(e) => this.handleChange(e)} />
                <label>Description</label><textarea name='description' value={this.state.description} onChange={(e) => this.handleChange(e)}  />
                <label>First brewed</label><input type='text' name='first_brewed' value={this.state.first_brewed} onChange={(e) => this.handleChange(e)}  />
                <label>Brewers tips</label><input type='text' name='brewers_tips' value={this.state.brewers_tips} onChange={(e) => this.handleChange(e)} />
                <label>Attenuation level</label><input type='text' name='attenuation_level' value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)} />
                <label>Contributed by</label><input type='text' name='contributed_by' value={this.state.contributed_by} onChange={(e) => this.handleChange(e)} />
                <button>Add New</button>
            </form>

        </div>

    )
}

}

export default Newbeer;
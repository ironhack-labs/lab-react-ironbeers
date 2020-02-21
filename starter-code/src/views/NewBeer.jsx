import React, {Component} from 'react'
import axios from "axios";
import "./../styles/NewBeer.css";

export default class NewBeer extends Component {
    state = {
        pop: "",
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: ""
    }

    updateState = (e) => {
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value})
    }

    submitForm = (e) => {
        e.preventDefault();
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips: this.state.brewers_tips,
            attenuation_level: this.state.attenuation_level,
            contributed_by: this.state.contributed_by
        })
        .then(apiRes => {
            this.setState({pop: <p className="pop-ok">The beer was created !</p>});
            console.log(apiRes);
        })
        .catch(apiErr => {
            this.setState({pop: <p className="pop-fail">Something went wrong...</p>});
            console.error(apiErr);
        });
    }

    render(){
        return (
            <section className="page new-page">
                <h1>Add a new beer</h1>
                {this.state.pop && this.state.pop}
                <form onChange={this.updateState} onSubmit={this.submitForm}>
                    <div>
                        <label htmlFor="name">Name :</label>
                        <input name="name" type="text" placeholder="ie : Viandox"/>
                    </div>
                    <div>
                        <label htmlFor="tagline">Tagline :</label>
                        <input name="tagline" type="text" placeholder="ie : This meaty one is a must have !"/>
                    </div>
                    <div className="textarea">
                        <label htmlFor="description">Description :</label>
                        <textarea name="description" placeholder="Type here"></textarea>
                    </div>
                    <div>
                        <label htmlFor="first_brewed">First brewed in :</label>
                        <input name="first_brewed" type="text" placeholder="ie : 10/1976"/>
                    </div>
                    <div>
                        <label htmlFor="brewer_tips">Tips :</label>
                        <input name="brewer_tips" type="text" placeholder="ie : Best served ice cold"/>
                    </div>
                    <div>
                        <label htmlFor="attenuation_level">Attenuation level :</label>
                        <input name="attenuation_level" type="number" placeholder="ie : 7"/>
                    </div>
                    <div>
                        <label htmlFor="contributed_by">Created by :</label>
                        <input name="contributed_by" type="text" placeholder="ie : Beef Inc."/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>
        )
    }
}

import React from 'react';


class NewBeer extends React.Component {

    state = {
        beer: {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: "",
            contributed_by: ""
        }
    }

    handleChange(event) {
        this.setState({ beer: event.target.value });
    }

    handleSubmit(event) {
        //need to post to API..,
    }



    render() {
        return (
            <div>
                <form className="newBeerForm">
                    <label>
                        Name: </label>
                    <input type="text" name="name" onChange={this.handleChange}></input>

                    <label>
                        Tagline: </label>
                    <input type="text" name="tagline" onChange={this.handleChange}></input>

                    <label>
                        Description: </label>
                    <textarea value={this.state.value}  name="description" type="text" onChange={this.handleChange} />
                    <label>
                        First Brewed:  </label>
                    <input type="text" name="first_brewed" onChange={this.handleChange}></input>

                    <label>
                        Brewers tips:   </label>
                    <input type="text" name="brewers_tips" onChange={this.handleChange}></input>

                    <label>
                        Attentuation level   </label>
                    <input type="number" name="attenuation_level" onChange={this.handleChange}></input>

                    <label>
                        Contributed by:  </label>
                    <input type="text" name="contributed_by" onChange={this.handleChange}></input>
                    <button type="submit" onSubmit={this.handleSubmit}></button>
                </form>
            </div>
        )
    }



}

export default NewBeer


// name - must be type text
// tagline - must be type text
// description - must be type text
// first_brewed - must be type text
// brewers_tips - must be type text
// attenuation_level - must be type number !!!
// contributed_by - must be type text
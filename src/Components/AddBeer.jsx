import React from 'react'
import '../styles/AddBeer.css';
import Header from './Header'

class AddBeer extends React.Component {

    state = {
        name:'',
        tagline:'',
        description:'',
        first_brewed:'',
        brewers_tips:'',
        attenuation_level:'',
        contributed_by:''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        console.log("this is where things happen", event.target)
        console.log("this is the data added in form", this.state)

        event.preventDefault()

        const newAddedBeer = {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            first_brewed: this.state.first_brewed,
            brewers_tips: this.state.brewers_tips,
            attenuation_level: this.state.attenuation_level,
            contributed_by: this.state.contributed_by
        }

        console.log("food from Form =>", newAddedBeer)

        // this.props.callbackFn(newAddedBeer);
    }


    render() {
        return (
            <>
            <Header />
                <h3>Add new Beer !</h3>
                <div className="Form__container">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input className="Input" type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}/>

                        <label htmlFor="tagline">Tagline</label>
                        <input className="Input" type="text" name="tagline" id="tagline" onChange={this.handleChange} value={this.state.tagline}/>

                        <label htmlFor="description">Description</label>
                        <textarea className="Input" type="text" name="description" id="description" onChange={this.handleChange} value={this.state.description}/>

                        <label htmlFor="first_brewed">First Brewed</label>
                        <input className="Input" type="text" name="first_brewed" id="first_brewed" onChange={this.handleChange} value={this.state.first_brewed}/>

                        <label htmlFor="brewers_tips">Brewer Tips</label>
                        <input className="Input" type="text" name="brewers_tips" id="brewers_tips" onChange={this.handleChange} value={this.state.brewers_tips}/>

                        <label htmlFor="attenuation_level">Attenuation Level</label>
                        <input className="Input" type="text" name="attenuation_level" id="attenuation_level" onChange={this.handleChange} value={this.state.attenuation_level}/>

                        <label htmlFor="contributed_by">Contributed By</label>
                        <input className="Input" type="text" name="contributed_by" id="contributed_by" onChange={this.handleChange} value={this.state.contributed_by}/>

                        <button>ADD NEW</button>
                    </form>
                </div>
            </>
        )
    }
}

export default AddBeer
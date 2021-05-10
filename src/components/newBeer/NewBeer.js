import React from 'react';
import PageHeader from '../pageHeader/PageHeader';
import beersImage from '../../assets/new-beer.png';
import axios from 'axios';

class NewBeer extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tip: "",
            attenuation_level: 0,
            contributed_by: ""
        }
    }
    addToData(event){
        event.preventDefault()
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state)
        .then((res) => res.json())
        .then(
        (result) => {
            console.log(result)
        },

        (error) => {
            this.setState({
            error
            });
        }
        );
    }

    addName(event) {
        this.setState({
            name: event.target.value
        })
    }

    addTagline(event) {
        this.setState({
            tagline: event.target.value
        })
    }

    addDescription(event) {
        this.setState({
            description: event.target.value
        })
    }

    addFirstBrewed(event) {
        this.setState({
            first_brewed: event.target.value
        })
    }

    addBrewersTip(event) {
        this.setState({
            brewers_tip: event.target.value
        })
    }

    addAttenuationLevel(event) {
        this.setState({
            attenuation_level: event.target.value
        })
    }

    addContributedBy(event) {
        this.setState({
            contributed_by: event.target.value
        })
    }

    render() {
        return(
            <div>
                <PageHeader image={beersImage} title="New Beer" description="Lorem ipsum"/>
                <form onSubmit={(e) => {this.addToData(e)}}>
                    <label><b>Name:</b></label>
                    <input type="text" name="name" onChange={(e) => {this.addName(e)}} />

                    <label><b>Tagline:</b></label>
                    <input type="text" name="tagline" onChange={(e) => {this.addTagline(e)}} />

                    <label><b>Description:</b></label>
                    <input type="text" name="description" onChange={(e) => {this.addDescription(e)}} />

                    <label><b>First Brewed on:</b></label>
                    <input type="text" name="firstBrewed" onChange={(e) => {this.addFirstBrewed(e)}} />

                    <label><b>Brewers Tip:</b></label>
                    <input type="text" name="brewersTip" onChange={(e) => {this.addBrewersTip(e)}} />

                    <label><b>Attenuation Level:</b></label>
                    <input type="number" name="attenuationLevel" onChange={(e) => {this.addAttenuationLevel(e)}} />

                    <label><b>Contributed By:</b></label>
                    <input type="text" name="contributedBy" onChange={(e) => {this.addContributedBy(e)}} />

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewBeer;
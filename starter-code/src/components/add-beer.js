import React, { Component } from 'react';
import BeerDetail from './beer-detail';
import axios from 'axios';
import Navbar from './nav';

class AddBeer extends Component {
    constructor() {
        super()

        this.nameInput = this.nameInput.bind(this);
        this.taglineInput = this.taglineInput.bind(this);
        this.descriptionInput = this.descriptionInput.bind(this);
        this.attenuationLevelInput = this.attenuationLevelInput.bind(this);
        this.brewersTipsInput = this.brewersTipsInput.bind(this);
        this.contributedByInput = this.contributedByInput.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.state = {
            response: 0 ,
            tempBeer: {
                name:"",  
                tagline : "", 
                description: "",  
                first_brewed : "", 
                brewers_tips  : "",
                attenuation_level: 0,  
                contributed_by: "" 
            }, 
            newBeer:{}   
        }
    }

    nameInput = (event) => {
        let tempBeerCopy = {...this.state.tempBeer};
        tempBeerCopy.name = event.target.value;
        this.setState({
            tempBeer: tempBeerCopy 
        })
      }
    
    taglineInput = (event) => {
        let tempBeerCopy = {...this.state.tempBeer};
        tempBeerCopy.tagline = event.target.value;
        this.setState({
            tempBeer: tempBeerCopy
        })
      }
   
    descriptionInput = (event) => {
        let tempBeerCopy = {...this.state.tempBeer};
        tempBeerCopy.description = event.target.value;
        this.setState({
            tempBeer: tempBeerCopy
        })
      }

    firstBrewedInput = (event) => {
        let tempBeerCopy = {...this.state.tempBeer};
        tempBeerCopy.first_brewed = event.target.value;
        this.setState({
            tempBeer: tempBeerCopy
        })
      }

    brewersTipsInput = (event) => {
        let tempBeerCopy = {...this.state.tempBeer};
        tempBeerCopy.brewers_tips = event.target.value;
        this.setState({
            tempBeer: tempBeerCopy
        })
      }

    attenuationLevelInput = (event) => {
        let tempBeerCopy = {...this.state.tempBeer};
        tempBeerCopy.attenuation_level = event.target.value;
        this.setState({
            tempBeer: tempBeerCopy
        })
      }

    contributedByInput = (event) => {
        let tempBeerCopy = {...this.state.tempBeer};
        tempBeerCopy.contributed_by = event.target.value;
        this.setState({
            tempBeer: tempBeerCopy
        })
      }

    handleFormSubmit(event) {
        event.preventDefault();
        // console.log(this.state.tempBeer)
        debugger
        axios.post("https://ih-beers-api.herokuapp.com/beers/new", this.state.tempBeer)
        .then(response => {
            console.log(response)
            this.setState({response: response.status, newBeer: response.data})
        })
        .catch((error)=> {
            console.log(error);
        });
    }

    render() {
        // debugger
        if (this.state.response === 200) {return(
            <div>
                <BeerDetail beer={this.state.newBeer}/>
            </div>
        )} else {
            return (          
                <div>
                    <Navbar />
                    <div className= "add-form">                  
                        <form onSubmit={this.handleFormSubmit}>
                            <label>Name:</label>
                            <input type="text" name="name" value={this.state.tempBeer.name} onChange={(e) => this.nameInput(e)}/>

                            <label>Tagline:</label>
                            <input type="text" name="tagline" value={this.state.tempBeer.tagline} onChange={(e) => this.taglineInput(e)}/>

                            <label>Description:</label>
                            <input type="text" name="description" value={this.state.tempBeer.description} onChange={(e) => this.descriptionInput(e)}/>
                            
                            <label>First_brewed:</label>
                            <input type="date" name="first_brewed" value={this.state.tempBeer.first_brewed} onChange={(e) => this.firstBrewedInput(e)}/>

                            <label>Brewers_tips:</label>
                            <input type="text" name="brewers_tips" value={this.state.tempBeer.brewers_tips} onChange={(e) => this.brewersTipsInput(e)}/>

                            <label>Attenuation_level:</label>
                            <input type="number" name="attenuation_level" value={this.state.tempBeer.attenuation_level} onChange={(e) => this.attenuationLevelInput(e)}/>

                            <label>Contributed_by:</label>
                            <input type="text" name="contributed_by" value={this.state.tempBeer.contributed_by} onChange={(e) => this.contributedByInput(e)} />
                            
                            <input type="submit" value="Submit" />
                        </form>
                        
                    </div>
                </div>
            )
        }
        
  
    }
}


export default AddBeer;

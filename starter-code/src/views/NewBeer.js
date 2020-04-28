import React from 'react'
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

class NewBeer extends React.Component {

    state= {
        id: "",
        name: "",
        tagline: "",
        description: "",
        firstBrewed: "",
        brewedTips: "",
        attenuationLevel: "",
        contributedBy: "",
        successfulCreated: false
    }

    updateField(e, field){
        let value = e.target.value;
        this.setState({
            [field]: value
        })
        console.log(this.state)
    }

    submitForm(){
        let content = {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description,
            firstBrewed: this.state.firstBrewed,
            brewedTips: this.state.brewedTips,
            attenuationLevel: this.state.attenuationLevel,
            contributedBy: this.state.contributedBy,
        }
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", content)
        .then(createdBeer => {
            if(createdBeer.status === 200){
                this.setState({
                    successfulCreated: true
                })
            }
        })
    }

    render(){
        return(
            <div>
                {this.state.successfulCreated === true ?
                    <Redirect to={'/beers'} />
                :
                    <div>
                        <div className="field">
                            <label>Name</label>
                            <input type="text" onChange={(e) => this.updateField(e, "name")}/>
                        </div>
                        <div className="field">
                            <label>Tagline</label>
                            <input type="text" onChange={(e) => this.updateField(e, "tagline")}/>
                        </div>
                        <div className="field">
                            <label>Description</label>
                            <textarea name="description" onChange={(e) => this.updateField(e, "description")}></textarea>
                        </div>
                        <div className="field">
                            <label>First brewed</label>
                            <input type="text" onChange={(e) => this.updateField(e, "firstBrewed")}/>
                        </div>
                        <div className="field">
                            <label>Brewed tips</label>
                            <input type="text" onChange={(e) => this.updateField(e, "brewedTips")}/>
                        </div>
                        <div className="field">
                            <label>Attenuation level</label>
                            <input type="text" onChange={(e) => this.updateField(e, "attenuationLevel")}/>
                        </div>
                        <div className="field">
                            <label>Contributed By</label>
                            <input type="text" onChange={(e) => this.updateField(e, "contributedBy")}/>
                        </div>

                        <button className="buttonAddBeer" onClick={() => this.submitForm()}>Add new beer</button>
                    </div>
                }
                
            </div>
        )
    }
}

export default NewBeer;
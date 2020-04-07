import React, { Component } from 'react';
import Navbar from './nav';
import {addBeerWithImage} from '../utils/beer';

class AddBeerWithImg extends Component {
    constructor() {
        super()

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
            newBeer:{} ,
            error: undefined
              
        }
        this.formRef = React.createRef()
    }


    handleFormSubmit(event) {
        debugger
        event.preventDefault();
        var formData = new FormData (this.formRef.current);
        
        addBeerWithImage(formData)
        .then(response => {
            console.log(response)
            this.props.history.push(`/beer-detail/${response.data._id}`)

        })
        .catch((error)=> {
            console.log(error);
            this.setState({error:error.response.data.message})
        });
    }

    render() {

            return (          
                <div>
                    <Navbar />
                    <div className= "add-form">                  
                        <form onSubmit={this.handleFormSubmit} ref={this.formRef}>
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input 
                                        className="input"
                                        type="text" 
                                        name="name" 
                                        placeholder="name" 
                                    />   {/* the handler gets the event object by default */}
                                </div>
                            </div>
                            
                            <div className="field">
                                <label className="label">Tagline:</label>
                                <div className="control">
                                    <input 
                                        className="input" 
                                        type="text" 
                                        name="tagline" 
                                        placeholder="tagline" 
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Description:</label>
                                <div className="control">
                                    <input 
                                        className="input" 
                                        type="text" 
                                        name="description" 
                                        placeholder="description" 
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">First_brewed:</label>
                                <div className="control">
                                    <input 
                                        className="input" 
                                        type="date" 
                                        name="first_brewed" 
                                        placeholder="first_brewed" 
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Brewers_tips:</label>
                                <div className="control">
                                    <input 
                                        className="input" 
                                        type="text" 
                                        name="brewers_tips" 
                                        placeholder="brewers_tips" 
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Attenuation_level:</label>
                                <div className="control">
                                    <input 
                                        className="input" 
                                        type="number" 
                                        name="attenuation_level" 
                                        placeholder="attenuation_level" 
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Contributed_by:</label>
                                <div className="control">
                                    <input 
                                        className="input" 
                                        type="text" 
                                        name="contributed_by" 
                                        placeholder="contributed_by" 
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Choose picture:</label>
                                <div className="control">
                                    <input 
                                        className="custom-file-upload" 
                                        type="file" 
                                        name="picture" 
                                    />
                                </div>
                            </div>

                            
                            
                            <div className="control">
                                <input className="button is-link" type="submit" value="Submit" />
                            </div>
                            
                        </form>
                        {this.state.error ? <p>{this.state.error}</p> : ""}
                        
                    </div>
                </div>
            )
        // }
        
  
    }
}


export default AddBeerWithImg;

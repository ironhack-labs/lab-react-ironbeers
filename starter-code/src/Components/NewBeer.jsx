import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NewBeer extends Component {

    state = {

    }

    submitForm = (event) => {
        event.preventDefault()

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
          .then(response => {console.log(response);})
    }


    handleChange = (e) => {
        console.log("value", e.target.value)
        console.log("value", e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        })

    }


    render() {
        return (
            <div>

                <nav className="navbar navbar-light">
                    <Link className="navbar-brand" to="/"><img src={"/images/logo.svg"} width="40" height="40" alt="" /></Link>
                </nav>

                <form className="newBeerForm">
                    <div className="form-group">
                        <label for="Name"><b>Name:</b></label>
                        <input className="form-control" type="text" name="Name" placeholder="" onChange={this.handleChange} />
                        <br></br>
                    </div>

                    <div className="form-group">
                        <label for="Tagline"><b>Tagline:</b></label>
                        <input className="form-control" type="text" name="Tagline" placeholder="" onChange={this.handleChange} />
                        <br></br>
                    </div>

                    <div className="form-group">
                        <label for="Description"><b>Description:</b></label>
                        <textarea className="form-control" type="text" name="Description" placeholder="" onChange={this.handleChange} ></textarea>
                        <br></br>
                    </div>

                    <div className="form-group">
                        <label for="First-Brewed"><b>First Brewed:</b></label>
                        <input className="form-control" type="text" name="First-Brewed" placeholder="" onChange={this.handleChange} />
                        <br></br>
                    </div>

                    <div className="form-group">
                        <label for="Brewer-Tips"><b>Brewer Tips:</b></label>
                        <input className="form-control" type="text" name="Brewer-Tips" placeholder="" onChange={this.handleChange} />
                        <br></br>
                    </div>

                    <div className="form-group">
                        <label for="Attenuation-Level"><b>Attenuation Level:</b></label>
                        <input className="form-control" type="number" name="Attenuation-Level" placeholder="" onChange={this.handleChange} />
                        <br></br>
                    </div>

                    <div className="form-group">
                        <label for="Contributed-By"><b>Contributed By:</b></label>
                        <input className="form-control" type="text" name="Contributed-By" placeholder="" onChange={this.handleChange} />
                        <br></br>
                    </div>

                    <input className="btn btn-primary" type="submit" value="Submit" onSubmit={this.submitForm}/>
                </form>

            </div>
        );
    }
}

export default NewBeer;
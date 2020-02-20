import React, { Component } from 'react';
import NavBar from '../NavBar';
import axios from 'axios'

class NewBeer extends Component {

    state = {
        name: "",
        tagline: "",
        description: "",
        firstBrewed: "",
        brewersTips: "",
        attentuationLevel: 0,
        contributedBy: ""
    }

    addNewBeer = (e) => {
        e.preventDefault()

        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err));

    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
    })
    }

   
    render() {
        return (
            <div>
                <NavBar />
                <form onSubmit={this.addNewBeer}>
  <div className="form-group">
    <label>Name</label>
    <input type="text" name ='name' className="form-control" onChange={this.handleInput}/>
  </div>
  <div className="form-group">
    <label>Tagline</label>
    <input type="text" name ='tagline' className="form-control" onChange={this.handleInput}/>
  </div>
  <div className="form-group has-success">
  <label>Description</label>
    <textarea type="text" name ='description' className="form-control input-lg" rows="10" onChange={this.handleInput}/>
  </div>
  <div className="form-group">
  <label>First Brewed</label>
    <input type="text" name ='firstBrewed' className="form-control" onChange={this.handleInput}/>
    </div>
    <div className="form-group">
  <label>Brewers Tips</label>
    <input type="text" name ='brewerTips' className="form-control" onChange={this.handleInput}/>
    </div>
    <div className="form-group">
  <label>Attenuation Level</label>
    <input type="number" name ='attenuationLevel' className="form-control" onChange={this.handleInput}/>
    </div>
    <div className="form-group">
  <label>Contributed By</label>
    <input type="text" name ='contributedBy' className="form-control" onChange={this.handleInput}/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
         </div>
    
        );
    }
}

export default NewBeer;
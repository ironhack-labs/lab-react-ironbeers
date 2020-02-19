import React, { Component } from 'react';
import NavBar from '../NavBar'

class NewBeer extends Component {

    state = {
       
    }

    addNewBeer = (e) => {
        e.preventDefault()
        
    }

    // Axios.post(`https://ih-beers-api2.herokuapp.com/beers`, this.state).then

    // handleInput = (e) => {
    //     this.setState([
    //         [e.target.name]: e.target.value
    //     ])
    // }


    render() {
        return (
            <div>
                <NavBar />
                <form onSubmit={this.addNewBeer}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="email" name ='' className="form-control" onChange={this.handleInput}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Tagline</label>
    <input type="email" className="form-control"/>
  </div>
  <div className="form-group has-success">
  <label htmlFor="exampleInputEmail1">Description</label>
    <textarea type="email" className="form-control input-lg" rows="10"/>
  </div>
  <div className="form-group">
  <label htmlFor="exampleInputEmail1">First Brewed</label>
    <input type="email" className="form-control"/>
    </div>
    <div className="form-group">
  <label htmlFor="exampleInputEmail1">Brewers Tips</label>
    <input type="email" className="form-control"/>
    </div>
    <div className="form-group">
  <label htmlFor="exampleInputEmail1">Attenuation Level</label>
    <input type="number" className="form-control"/>
    </div>
    <div className="form-group">
  <label htmlFor="exampleInputEmail1">Contributed By</label>
    <input type="email" className="form-control"/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
         </div>
    
        );
    }
}

export default NewBeer;
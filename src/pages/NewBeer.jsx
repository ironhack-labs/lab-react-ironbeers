import React from 'react';
import Header from '../components/Header';
import beerAPI from '../api/beersAPI'

class NewBeer extends React.Component{
state = {
    name: null,
    tagline: null,
    description: null,
    first_brewed: null,
    attenuation_level: null,
    contributed_by: null,
};

handleChange = (evt)=>{
    const value=evt.target.value;
    const name = evt.target.name;

     this.setState({
         [name]: value,
     });
 }  

 handleSubmit = (event) => {
    event.preventDefault();

    beerAPI.createNew({
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewer_tips: this.state.brewer_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    }).then((apiResponse) => {
        console.log(apiResponse);
    }).catch((error) => {
        console.log(error)
    })
  };

 render (){
      return (
    <div>
      <Header/>
      <h1>New Beer</h1>
      <form onSubmit={this.handleSubmit} >
          <div>
            <label>Beer name: </label>
            <input onChange={this.handleChange} id="name" type="text" name="name" value={this.state.name}/>
          </div>
          <div>
            <label>Tagline: </label>
              
            <input onChange={this.handleChange} id="tagline" type="text" name="tagline" value={this.state.tagline}/>
          </div>
          <div>
            <label>Description: </label>
            <input
              onChange={this.handleChange}
              id="description"
              type="text"
              name="description"
              value={this.state.description}

            />
          </div>
          <div>
            <label>First brew date: </label>
            <input
              onChange={this.handleChange}
              id="first_brewed"
              type="text"
              name="first_brewed"
              value={this.state.first_brewed}
              

            />
          </div>
          <div>
            <label>Brewer tips: </label>
            <input
              onChange={this.handleChange}
              id="brewer_tips"
              type="text"
              name="brewer_tips"
              value={this.state.brewer_tips}
            />
          </div>
          <div>
            <label>Attenuation level: </label>
            <input
              onChange={this.handleChange}
              id="attenuation_level"
              type="number"
              name="attenuation_level"
              value={this.state.attenuation_level}
            />
          </div>
          <div>
            <label>Your name: </label>
            <input
              onChange={this.handleChange}
              id="contributed_by"
              type="text"
              name="contributed_by"
              value={this.state.contributed_by}
            />
          </div>
          <button>Create new beer</button>
        </form>
    </div>
  );
  }
};

export default NewBeer;

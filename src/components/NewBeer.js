import React, {Component} from 'react';
import Navbar from './misc/NavBar';
import { newBeer } from '../services/BeersServices';


class NewBeer extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      tagline:"",
      description:"",
      first_brewed:"",
      brewers_tips:"",
      attenuation_level:0,
      contributed_by:""
    }
  }
handleFormSubmit = (e)=> {
  e.preventDefault();
  newBeer(this.state)
    .then(response => {
      console.log(response + " your beer has been added")
    })
    .catch(err => console.log(err))
};


handleChange = (e) => {
  const { name, value } = e.target;
  this.setState({ 
    [name]: value 
  });
}


render (){
  return (
    <div className="container">
    <Navbar/>
      <article className="media">
        <form onSubmit={this.handleFormSubmit}>
            <div className="field is-horizontal">           
                <div className="column">
                  <div className="media-content">
                    <div className="content">
                      <label>Name</label>
                      <input className="input" name="name" 
                      type="text" 
                      value={this.state.name}
                      onChange={e => this.handleChange(e)}>
                      </input>
                    </div>              
                  </div>
                  <div className="media-content">               
                    <div className="control">
                      <label>Tagline</label>
                        <input className="input" name="tagline"
                        type="text"  
                        value={this.state.tagline}
                        onChange={e => this.handleChange(e)}>
                        </input>
                    </div>                
                  </div>
                  <div className="media-content">               
                    <div className="control">
                      <label>Description</label>
                        <textarea className="textarea" name="description"
                        type="textarea"  
                        value={this.state.description}
                        onChange={e => this.handleChange(e)}>
                        </textarea>
                    </div>                
                  </div>
                  <div className="media-content">               
                    <div className="control">
                      <label>First brewed</label>
                        <input className="input" name="first_brewed"
                        type="text"  
                        value={this.state.first_brewed}
                        onChange={e => this.handleChange(e)}>
                        </input>
                    </div>                
                  </div>
                  <div className="media-content">               
                    <div className="control">
                      <label>Brewers tips</label>
                        <input className="input" name="brewers_tips"
                        type="text"  
                        value={this.state.brewers_tips}
                        onChange={e => this.handleChange(e)}>
                        </input>
                    </div>                
                  </div>
                  <div className="media-content">                 
                      <div className="control">
                        <label>Attenuation level</label>
                          <input className="input" name="attenuation_level" 
                          type="number" value={this.state.attenuation_level}
                          onChange={e => this.handleChange(e)}>
                          </input>
                      </div>                 
                  </div>
                  <div className="media-content">                 
                      <div className="control">
                        <label>Contributed by</label>
                          <input className="input" name="contributed_by" 
                          type="text" value={this.state.contributed_by}
                          onChange={e => this.handleChange(e)}>
                          </input>
                      </div>                 
                  </div>
                  <div className="control">
                    <button className="button is-info">Add new Beer</button>
                  </div>
                </div>
              </div>
          </form>
        </article> 
      </div>
  )
}


}



export default NewBeer
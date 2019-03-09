import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class NewBeer extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = this.state;
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    }
    console.log(newBeer);
    axios.post('https://ironbeer-api.herokuapp.com/beers/new', newBeer)
      .then(res => {
        console.log(res);
        this.setState({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: '',
          contributed_by: ''    
        });
      })
      .catch(err => console.log(err));
  }


  render(){
    return (
      <div>
        <header className='text-center bg-info'>
          <Link to='/'>
            <i className="fas fa-igloo fa-2x text-white"></i>
          </Link>
        </header>
        <div className='container-fluid'>
          <div className='row justify-content-center text-md-center'>
            <div className='col-12 col-md-4 py-2 px-4'>
              <h3>New Beer Form</h3>
              <form onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor='name'>Name</label>
                <br></br>
                <input type='text' name='name' id='name' value={this.state.name} onChange={e => this.handleChange(e)}/>
                <br></br>
                <label htmlFor='tagline'>Tagline</label>
                <br></br>
                <input type='text' name='tagline' id='tagline' value={this.state.tagline} onChange={e => this.handleChange(e)}/>
                <br></br>
                <label htmlFor='description'>Description</label>
                <br></br>
                <textarea rows='3' name='description' id='description' value={this.state.description} onChange={e => this.handleChange(e)}/>
                <br></br>
                <label htmlFor='first_brewed'>First Brewed</label>
                <br></br>
                <input type='text' name='first_brewed' id='first_brewed' value={this.state.first_brewed} onChange={e => this.handleChange(e)}/>
                <br></br>
                <label htmlFor='brewers_tips'>Brewer's Tips</label>
                <br></br>
                <input type='text' name='brewers_tips' id='brewers_tips' value={this.state.brewers_tips} onChange={e => this.handleChange(e)}/>
                <br></br>
                <label htmlFor='attenuation_level'>Attenuation Level</label>
                <br></br>
                <input type='number' name='attenuation_level' id='attenuation_level' value={this.state.attenuation_level} onChange={e => this.handleChange(e)}/>
                <br></br>
                <label htmlFor='contributed_by'>Contributed By</label>
                <br></br>
                <input type='text' name='contributed_by' id='contributed_by' value={this.state.contributed_by} onChange={e => this.handleChange(e)}/>
                <br></br>
                <br />
                <input type='submit' value='Add New Beer!' />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewBeer;
import React from 'react';
import Header from '../Header';
import NewBeerService from '../services/BeerService';
// import { Redirect } from 'react-router-dom';

class NewBeer extends React.Component{
  state={
    name:'',
    tagline:'',
    description:'',
    first_brewed:'',
    brewers_tips:'',
    attenuation_level: 0,
    contributed_by:''
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    event.target.type === 'number'
    ? this.setState({attenuation_level:Number(event.target.value)}) 
    : this.setState({[name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    NewBeerService.newBeer(this.state)
      .then(response => this.handleRedirect(response))
  }

  handleRedirect = (response) => {
    return response.status === 200 ? window.location.href = 'http://localhost:3000/beers' : console.log('error')
  }

  render() {

    return (
      <React.Fragment>
        <Header/>
          <form onSubmit={this.handleSubmit}>
            <div className='div-form'>
              <label className='label'>Name of Beer</label>
                <div className='control'>
                  <input onChange={event => this.handleInput(event)} value={this.state.name} name='name' className='input' type='text' placeholder='name of beer' />
                </div>
                  <label className='label'>Tag Line</label>
                    <div className='control'>
                      <input onChange={event => this.handleInput(event)} value={this.state.tagline} name='tagline' className='input' type='text' placeholder='tagline' />
                    </div>
                      <label className='label'>Description</label>
                        <div className='control'>
                          <input onChange={event => this.handleInput(event)} value={this.state.description} name='description' className='input' type='text' placeholder='Description' />
                        </div>
                          <label className='label'>First Brewed</label>
                            <div className='control'>
                              <input onChange={event => this.handleInput(event)} value={this.state.first_brewed} name='first_brewed' className='input' type='text' placeholder='First Brewed' />
                            </div>
                              <label className='label'>Breweds Tips</label>
                                <div className='control'>
                                  <input onChange={event => this.handleInput(event)} value={this.state.brewers_tips} name='brewers_tips' className='input' type='text' placeholder='Breweds Tips' />
                                </div>
                                  <label className='label'>Attenuation Level</label>
                                    <div className='control'>
                                      <input onChange={event => this.handleInput(event)} value={this.state.attenuation_level} name='attenuation_level' className='input' type='number' placeholder='Attenuation Level' />
                                    </div>
                                      <label className='label'>Contributed By</label>
                                        <div className='control'>
                                          <input onChange={event => this.handleInput(event)} value={this.state.contributed_by} name='contributed_by' className='input' type='text' placeholder='Contributed By' />
                                        </div>
                                          <button className='is-link' tpye='submit' value='submit'>SUBMIT</button>
            </div>
          </form>
      </React.Fragment>

    )
  }
}

export default NewBeer;
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../homeComponent/HeaderHome';



class Randombeer extends Component {
  state = {
    beers: []
  }

  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then(result => {
      const {data} = result
      this.setState({
        beers: data
        
      })
    })
   
  }


  
  render() {
    return (  
      <> 
        <Header/>
        {console.log(this.state.beers.name)}
        <div style={{padding: '230px'}}>
          <div className="d-flex justify-content-center"><img style={{height: '300px', width:'90px'}} className='align-center' src ={this.state.beers.image_url}/></div>
          <div className='d-flex justify-content-between p-2'><span className="fs-2 fw-bold">{this.state.beers.name}</span> <span className='fs-4 text-black-50'>{this.state.beers.attenuation_level}</span></div>
          <div className='d-flex justify-content-between p-2'><span className='fs-3 text-black-50'>{this.state.beers.tagline}</span> <span className='fs-6 fw-bold'>{this.state.beers.first_brewed}</span></div>
          <div><p className='p-2'>{this.state.beers.description}</p><p className='p-2 text-black-50 fw-bold '>{this.state.beers.contributed_by}</p></div>
        </div>)
        
      </>
    );
  }
}
    
    
 
export default Randombeer ;
import React, { Component } from 'react';
import axios from 'axios';
import Header from '../homeComponent/HeaderHome';

class Eachbeer extends Component {
  state = {
    beers: []
    }

  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((result) => {
      const {data} = result
      this.setState({
        beers: data
      })
    })}


  render() { 
    const id = this.props.match.params.code
    console.log(id)
    const selectedBeer = this.state.beers.filter((element) => element._id === id )
    console.log(selectedBeer)
    return (
      <> 
        <Header/>
        
        {selectedBeer.map((element) => <div style={{padding: '230px'}}>
          <div className="d-flex justify-content-center"><img style={{height: '300px', width:'90px'}} className='align-center' src ={element.image_url}/></div>
          <div className='d-flex justify-content-between p-2'><span className="fs-2 fw-bold">{element.name}</span> <span className='fs-4 text-black-50'>{element.attenuation_level}</span></div>
          <div className='d-flex justify-content-between p-2'><span className='fs-3 text-black-50'>{element.tagline}</span> <span className='fs-6 fw-bold'>{element.first_brewed}</span></div>
          <div><p className='p-2'>{element.description}</p><p className='p-2 text-black-50 fw-bold '>{element.contributed_by}</p></div>
        </div>)}
        
      </>
    );
  }
}
 
export default Eachbeer ;
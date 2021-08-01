import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../homeComponent/HeaderHome';

class Detailallbeers  extends Component {
  
  state = {  
    beers: []
  }
  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then(result => {
      const beersData = result.data
      this.setState({
        beers: beersData
      })
    })
  }
    
  render() { 
    
    return ( 
      <div>
      <Header/>
        <ul class="list-group list-group-flush">
          {this.state.beers.map((element) => 
          <Link key={element._id} className='text-decoration-none list-group-item' to={`/beers/${element._id}`}> 
            <div  className= 'd-flex' > 
              <div >
                <img className='p-3' style={{height: '200px', width:'90px'}} src= {element.image_url} alt = {element.name}/>
              </div> 
              <div className= 'align-self-center lh-1 ps-4'> 
                <p>{element.name}</p>
                <p>{element.tagline}</p>
                <p>Create by: {element.contributed_by}</p>
              </div>
            </div>
          </Link>)}
        </ul>
      </div>
     );
            

          
            
          

          
        
          
  }
}

export default Detailallbeers ;
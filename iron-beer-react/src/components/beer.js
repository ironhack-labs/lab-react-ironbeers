import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'


class Home extends Component {
    constructor() {
        super();
        this.state = {
            listOfProjects: null
        };
    }

    getAllProjects = () => {
          axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
              .then(responseFromApi => {
                  console.log(responseFromApi);
                  this.setState({
                      listOfProjects: responseFromApi.data
                  })
              })
    }

    componentDidMount() {
    this.getAllProjects();
  }

    render(){
        
         return this.state.listOfProjects ? 
        (<div>
         
        <div style={{width: '60%', float:"left"}}>
         <ul>
          <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
        </ul>
          { this.state.listOfProjects.map((beer, index) => {
             return (
                 

              <div key={beer._id}>
                
    
                <Link to={`/SingleBeer/${beer._id}`}>
                  <img src={beer.image_url} alt="imgBeer"/>
                  <p>{beer.name}</p>
                  <p>{beer.tagline}</p>
                  <p>{beer.contributed_by}</p>
                </Link>
                
              </div>
              
            )})
          }    
        </div>
        {/* <div style={{width: '40%', float:"right"}}>
            <Home getData={() => this.getAllProjects()}/>
        </div> */}
      </div>)
      : 
        (
        <p>Loading...</p>
      )
      
     

    }
}




export default Home;
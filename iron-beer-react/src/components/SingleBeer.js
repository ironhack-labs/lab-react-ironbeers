import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class SingleBeer extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }



getSingleProject = () => {
      const { params } = this.props.match;
      axios.get(`http://localhost:5000/api/beers/single/:${params.id}`)
      .then( responseFromApi =>{
          const theProject = responseFromApi.data;
          this.setState(theProject);
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  componentDidMount() {
      this.getSingleProject();
  }

  render(){
      
    return(
      <div>
          
           <ul>
          <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
        </ul>
        {/* <img src={this.state.image_url}/> */}
        <h1>{this.state.name}</h1>
        <p>{this.state.description}</p>
      </div>
    )
  }


}

export default SingleBeer
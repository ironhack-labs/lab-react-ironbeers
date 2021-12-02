import React, {Component} from 'react';
import Navbar from './NavBar';
import BeerService from "../services/beerService";


class Cerveza extends Component {
    constructor() {
      super()
  
      this.state = {
        image_url: "",
        name: "",
        tagline: "",
        first_brewed: "",
        attenuation_level: "",
        description:"",
        contributed_by: ""
      }
  
      this.service = new BeerService()
    }
  
    componentDidMount() {
      const id = this.props.match.params.id
  
      this.service.getOneBeer(id)
        .then(response => {
          const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = response.data
            console.log(response.data)
          this.setState({ image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by})
        })
        .catch(err => console.log(err))
    }
  
    render() {
      return (
    <div className="Cerve">
      <Navbar/>
      <div>
        <div>
          <img src={this.state.image_url} />
        </div>
        <div>
          <h2>{this.state.name}</h2>
          <h3>{this.state.tagline}</h3>
          <h4>{this.state.first_brewed}</h4>
          <h5>{this.state.attenuation_level}</h5>
          <p>{this.state.description}</p>
          <p>{this.state.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}
}
export default Cerveza;
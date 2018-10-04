import React from "react";
import Header from "./Header";
import axios from 'axios'
export default class BeerDetail extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.beer)
    this.state = { beer: {...this.props.beer} }
  }
  getBeer=(id)=>{
    axios.get('https://ironbeer-api.herokuapp.com/beers/single/' +id )
    .then(res => {
      this.setState({ beer: res.data })
    })
    .catch(e => console.log(e))
  }
  componentWillMount() {
    if(!this.state.beer._id && !this.props.loading){
      this.getBeer(this.props.match.params.id)
    }
  }
  render() {
    const beer=(this.props.beer)?this.props.beer:this.state.beer
    const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = beer
    return (
      <div>
        <Header loading={(this.props.loading)}></Header>
        {!this.props.loading &&
        <ul>
          <li>
            <img width="50px" src={image_url} alt={name} />
          </li>
          <li>
            <h2>{name}</h2><span>{attenuation_level}</span>
          </li>
          <li>{tagline}<span>{first_brewed}</span></li>
          <li>{description}</li>
          <li>contributed by: {contributed_by}</li>
        </ul>}
      </div>
    );
  }
};
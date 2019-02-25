import React from 'react'
import BeerService from '../BeerService'
import HomeLink from './HomeLink';
import { Link } from 'react-router-dom';

export default class Allbeers extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      beer: [],

    }
    this.beerService = new BeerService();
    this.getBeer();
  }

  getBeer = () => {
    this.beerService.getBeer()
      .then(beers => {

        //let stateCopy={...this.state};
        //stateCopy.butterfly=butterflies
        //this.setState(stateCopy)

        this.setState({ ...this.state, beer: beers })
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log("BEER",this.state.beer)
    return (
      <div>
        <HomeLink />
        <h1>All Beers</h1>
        {this.state.beer.map((data, index) => {
         
          return (
            <div key={index}>
              <Link to={`/single/${data._id}`}>
                <img alt={data.name} width="50px" src={data.image_url} />
                <div>{data.name}</div>
                <div>{data.tagline}</div>
                <div>Created by: {data.contributed_by}</div>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

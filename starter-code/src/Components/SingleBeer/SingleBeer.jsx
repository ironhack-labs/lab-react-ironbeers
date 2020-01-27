import React, { Component } from 'react';
import NavBar from '../NavBar/Navbar';

export default class SingleBeer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.isRandom) {
      this.props.getRandomBeer();
    } else {
      const beerId = this.props.match.params.id;
      console.log('beerId:', beerId);
      this.props.getSingleBeer(beerId);
    }
  }

  render() {
    console.log(this.props.singleBeer);
    console.log(this.props.randomBeer.data);
    let content;
    // const {
    //   name,
    //   tagline,
    //   first_brewed,
    //   description,
    //   attenuation_level,
    //   contributed_by,
    // } = this.props.randomBeer.data || this.props.singleBeer;
    content = (
      <article>
        <p>{name}</p>
        <p>{attenuation_level}</p>
        <p>{first_brewed}</p>
        <p>{description}</p>
        <p>{contributed_by}</p>
        <p>{tagline}</p>
      </article>
    );
    return (
      <div>
        <NavBar />
        {content}
      </div>
    );
  }

  // render() {
  //   let content;
  //   console.log(this.props)
  //   if (this.props.isRandom) {

  //     content = {name, tagline, first_brewed, description, attenuation_level, contributed_by}
  //   } else if (!this.props.isRandom) {
  //     const {
  //       name,
  //       tagline,
  //       first_brewed,
  //       description,
  //       attenuation_level,
  //       contributed_by,
  //     } = this.props.SingleBeer.data;
  //     content = {name, tagline, first_brewed, description, attenuation_level, contributed_by}
  //   } else {
  //     return <h1>loading...</h1>;
  //   }
  //   );
  // }
}

import React, { Component } from 'react';

export default class SingleBeer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRandomBeer();
  }

  render() {
    let content;
    if (this.props.randomBeer.data) {
      const {
        name,
        tagline,
        first_brewed,
        description,
        attenuation_level,
        contributed_by,
      } = this.props.randomBeer.data;

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
    } else {
      content = <h1>loading...</h1>;
    }
    return content;
  }
}

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Section extends Component {
  render() {
    const {title, children, image, linkTo} = this.props;
    return (
      <Link className={'section'} to={linkTo}>
        <img src={image} alt=""/>
        <h2>{title}</h2>
        <p>{children}</p>
      </Link>
    );
  }
}

export default Section;
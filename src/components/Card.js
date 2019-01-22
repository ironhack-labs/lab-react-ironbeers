import React, { Component } from 'react';
import styled from '@emotion/styled';

const ImageStyle = styled.img`
max-width: 100%;
min-width: 100%;
heigth: auto;
position: center;
`
const DivStyle = styled.div`
margin: 5vw;
text-align: left
`
const LinkStyle = styled.a`
color: white;
text-decoration: none;
`

class Card extends Component {
  render() {
    return (
      <DivStyle>
        <ImageStyle src={this.props.img} />
        <h2><LinkStyle href={this.props.url}>{this.props.title}</LinkStyle></h2>
        <p>{this.props.description}</p>
      </DivStyle>
    )
  }
};

export default Card;
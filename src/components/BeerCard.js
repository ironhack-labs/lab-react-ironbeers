import React from "react";
import styled from '@emotion/styled';
import { Link } from "react-router-dom"

const ImageStyle = styled.img `
height: 20vh;
`

const H4Style = styled.h4 `
position: relative;
float: right;
`

const PStyle = styled.p `
position: relative;
float: right;
`

export const BeerCard = ({beer}) => {
  return (
      <div>
          <ImageStyle src={beer.image_url}/>
          <H4Style><Link to to={`/beer/${beer._id}`}>{beer.name}</Link></H4Style>
          <PStyle>{beer.tagline}</PStyle>
          <PStyle>{beer.contributed_by}</PStyle>
      </div>
  )
};
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export const StyledH1 = styled.h1({
  fontSize: '1.5em'
});

export const StyledH2 = styled.h2({
  fontSize: '1.2em',
  color: 'gray'
});

export const StyledLink = styled(Link)`
    text-decoration: inherit;
    color:inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: inherit;
    }
`;

export const StyledImg = styled(Card.Img )`
  width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledCard = styled(Card)`
  padding-top: 2em;
`;

export const StyledCardTitle = styled(Card.Title)`
  font-size: 1.8em;
`;

export const Contributed = styled.div({
  color: 'grey'
})

export const Attenuation = styled.div({
  color: 'grey',
  fontSize: '1.5em'
});

export const Tagline = styled.div({
  color: 'grey',
  fontSize: '1em'
});

export const Brewed = styled.div({
  fontWeight: 'bold'
});

export const StyledP = styled.p({
  color: 'gray',
  textAlign: 'left'
});
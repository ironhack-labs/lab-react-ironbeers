import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { StyledLink, StyledH1, StyledP} from './../styles/Styles'

const HomePage = () => {

  return(
    <Container>
      <Row>
        <Image src={'./images/beers.png'} alt='Beers' fluid></Image>
        <StyledLink to='/beers'><StyledH1 className='pl-3 pt-2'>All Beers</StyledH1></StyledLink>
        <StyledP className='pl-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis velit ut risus pulvinar hendrerit eget et eros. Sed quis arcu nulla. Suspendisse ullamcorper eu velit et malesuada.</StyledP>
      </Row>
      <Row>
        <Image src={'./images/random-beer.png'} alt='Beers' fluid></Image>
        <StyledLink to='/random-beer'><StyledH1 className='pl-3 pt-2'>Random Beer</StyledH1></StyledLink>
        <StyledP className='pl-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis velit ut risus pulvinar hendrerit eget et eros. Sed quis arcu nulla. Suspendisse ullamcorper eu velit et malesuada.</StyledP>
      </Row>
      <Row>
        <Image src={'./images/new-beer.png'} alt='Beers' fluid></Image>
        <StyledLink to='/new-beer' className='pl-3 pt-2'><StyledH1>New Beer</StyledH1></StyledLink>
        <StyledP className='pl-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis velit ut risus pulvinar hendrerit eget et eros. Sed quis arcu nulla. Suspendisse ullamcorper eu velit et malesuada.</StyledP>
      </Row>
    </Container>

  );
}

export default HomePage;
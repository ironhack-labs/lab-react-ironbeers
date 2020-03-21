import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { formatContributor } from './../lib/Utils';
import { StyledImg, StyledCard, StyledCardTitle, Contributed, Attenuation, Tagline, Brewed} from './../styles/Styles'

const BeerDetail = (props) => {
  const {image_url, name, tagline, attenuation_level, first_brewed, description, contributed_by} = props.beer;

  return(
      <StyledCard>
        <StyledImg src={image_url} />
        <Card.Body>
          <Row>
            <Col xs="8" lg="8">
              <StyledCardTitle className="text-left">{name}</StyledCardTitle>
            </Col>
            <Col xs="4" lg="4">
              <Attenuation className="text-right">{attenuation_level}</Attenuation>
            </Col>
          </Row>
          <Row>
            <Col xs="8" lg="8">
              <Tagline className="text-left" >{tagline}</Tagline>
            </Col>
            <Col xs="4" lg="4">
              <Brewed className="text-right">{first_brewed}</Brewed>
            </Col>
          </Row>
          <Card.Text className="text-left pt-4">
            {description}
          </Card.Text>
          <Contributed className="text-left">
            {formatContributor(contributed_by)}
          </Contributed>
        </Card.Body>
      </StyledCard>
  );
}

export default BeerDetail;
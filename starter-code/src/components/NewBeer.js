import React, { useEffect, useState } from "react";
import Layout from './Layout'
import { Container, Row, Col } from 'react-bootstrap';

const NewBeer = () => {
    return (
      <Layout>
        <Container className="cont-form mt-5 mb-5">
          <Row>
            <Col xs={12}>
              <form action="">
                <input type="text" name="name" className="input input-form" placeholder="Name"/>
                <input type="text" name="tagline" className="input input-form" placeholder="Tagline"/>
                <textarea name="description" cols="30" rows="10" className="input text-area-form" placeholder="Description"></textarea>
                <input type="text" name="firstBrewed" className="input input-form" placeholder="First Brewed"/>
                <input type="text" name="brewersTips" className="input input-form" placeholder="Brewers Tips"/>
                <input type="text" name="attenuation" className="input input-form" placeholder="Attenuation Level"/>
                <input type="text" name="contributed" className="input input-form" placeholder="Contributed by"/>
                <input type="submit" value="ADD NEW" className="input submit"/>
              </form>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }


export default NewBeer;
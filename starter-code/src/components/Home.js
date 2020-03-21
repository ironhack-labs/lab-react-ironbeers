import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Footer from './Footer'

const Home = () => {
    return (
      <>
     <main>
       <Container fluid={true} className="mt-5">
        <Row>
            <Col md={12} lg={4} className="mb-5">
                <Link to="/beers"><img className="resp rounded-top" src="images/beers.png" alt="Beers"/></Link>
                <div className="description">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus voluptates magnam laboriosam rem cum tenetur provident quas exercitationem officiis.
                    <br/><br/>
                    </p>
                  <div className="text-center">
                    <Link to="/beers"><Button variant="dark btn">All Beers</Button></Link>
                  </div>
                </div>
            </Col>
            <Col md={12} lg={4} className="mb-5">
            <Link to="/random-beer"><img className="resp rounded-top" src="images/random-beer.png" alt="Beers"/></Link>
                <div className="description">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus voluptates magnam laboriosam rem cum tenetur provident quas exercitationem officiis.
                    <br/><br/>
                    </p>
                  <div className="text-center">
                  <Link to="/random-beer"><Button variant="dark btn">Random Beer</Button></Link>
                  </div>
                </div>
            </Col>
            <Col md={12} lg={4} className="mb-5">
            <Link to="/new-beer"><img className="resp rounded-top" src="images/new-beer.png" alt="Beers"/></Link>
                <div className="description">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus voluptates magnam laboriosam rem cum tenetur provident quas exercitationem officiis.
                    <br/><br/>
                    </p>
                  <div className="text-center">
                  <Link to="/new-beer"><Button variant="dark btn">Add New Beer</Button></Link>
                  </div>
                </div>
            </Col>
        </Row>
      </Container>
     </main>
      <Footer />
      </>
    );
  }


export default Home;

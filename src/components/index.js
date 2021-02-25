import React from 'react';
import { Link } from 'react-router-dom'

import allbeers from './beers.png'
import randomBeer from './random-beer.png'
import newBeer from './new-beer.png'

import { Container, Row, Col } from 'react-bootstrap'

const Index = () => {
    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>

                    <div>
                        <img src={allbeers} alt="beers" />
                        <Link to='/beers'> <h1> All beers</h1> </Link>
                        <p>Lorem  ipsum  dolor sit  amet,  consectetur adipisicing  elit, sed  do eiusmod tempor incididunt  ut labore  et dolore magna aliqua. Ut  enim  ad  minim  veniam, quis  nostrud exercitation  ullamco laboris  nisi  ut  aliquip  ex  ea  commodo  consequat.</p>
                        <hr />
                    </div>
                    <div>
                        <img src={randomBeer} alt="beers" />
                        <Link to='/random'> <h1>Random beers</h1> </Link>
                        <p>Lorem  ipsum  dolor sit  amet,  consectetur adipisicing  elit, sed  do eiusmod tempor incididunt  ut labore  et dolore magna aliqua. Ut  enim  ad  minim  veniam, quis  nostrud exercitation  ullamco laboris  nisi  ut  aliquip  ex  ea  commodo  consequat.</p>
                        <hr />
                    </div><div>
                        <img src={newBeer} alt="beers" />
                        <Link to='/new'> <h1>New beer</h1> </Link>
                        <p>Lorem  ipsum  dolor sit  amet,  consectetur adipisicing  elit, sed  do eiusmod tempor incididunt  ut labore  et dolore magna aliqua. Ut  enim  ad  minim  veniam, quis  nostrud exercitation  ullamco laboris  nisi  ut  aliquip  ex  ea  commodo  consequat.</p>
                    </div>
                </Col>
            </Row>
        </Container >
    );
}

export default Index;

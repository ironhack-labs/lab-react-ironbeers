import { OmitProps } from 'antd/lib/transfer/ListBody';
import React from 'react';
import { Card, Row, Col, Divider, Layout, Typography } from 'antd';
import { useHistory } from 'react-router-dom';

const BeerList = ({ beers }) => {
  console.log(beers);
  const history = useHistory();
  return (
    <Row justify="center" gutter={[24, 24]}>
      {beers.map((beer) => (
        <Col key={beer._id} span={{ sm: 24, lg: 12 }}>
          <Card
            onClick={() => history.push('/beers/' + beer._id)}
            cover={
              <img
                alt="example"
                src={beer.image_url}
                style={{ height: 200, width: 'auto', margin: 'auto', marginTop: 20 }}
              />
            }
            title={beer.name}
            style={{ width: 300, height: 400 }}
          >
            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default BeerList;

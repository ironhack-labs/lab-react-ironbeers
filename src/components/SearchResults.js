import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'antd';
const { Meta } = Card;

const SearchResults = ({ item }) => {
  return (
    <Col key={item._id} xs={24} sm={24} md={12} lg={6}>
      <Link to={`/beers/${item._id}`}>
        <Card style={{ height: '15rem', boxSizing: 'border-box' }} hoverable>
          <div
            style={{
              display: 'flex',
              boxSizing: 'border-box',
            }}
          >
            <img
              style={{
                height: '5.5rem',
                width: 'auto',
                margin: '1rem auto',
              }}
              alt="all-beers"
              src={item.image_url}
            />
          </div>

          <Meta title={item.name} description={<small>{item.tagline}</small>} />
        </Card>
      </Link>
    </Col>
  );
};

export default SearchResults;

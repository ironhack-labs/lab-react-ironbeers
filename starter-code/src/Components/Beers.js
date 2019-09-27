import React from 'react';
import { Link } from 'react-router-dom';
import {Layout, Pagination, Card, Icon } from 'antd';


function Beers({from, to, handleChange, beers }) {
  return (
    <Layout.Content className="main"
      style={{
        padding: '50px 150px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'flex-start',
          alignContent: 'center'
        }}
      >
        {beers.slice(from, to).map(beer => (
          <Card
            style={{ width: 300, margin: '20px' }}
            cover={
              <Link to={`/beers/${beer._id}`}>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    height: '250px',
                    padding: '15px'
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                    alt={beer.name}
                    src={beer.image_url}
                  />
                </div>
              </Link>
            }
            actions={[
              <Link to={`/beers/${beer._id}`}>
                <Icon type="small-dash" />
              </Link>
            ]}
            key={beer._id}
          >
            <Card.Meta
              title={beer.name}
              description={
                <div>
                  <h3>{beer.tagline}</h3>
                  <p>
                    <b>{beer.contributed_by}</b>
                  </p>
                </div>
              }
            />
          </Card>
        ))}
      </div>
      <Pagination
        defaultCurrent={1}
        defaultPageSize={10} 
        onChange={handleChange}
        total={beers.length}
      />
    </Layout.Content>
  );
}

export default Beers;
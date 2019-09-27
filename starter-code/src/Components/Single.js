import React from 'react';
import axios from 'axios';
import { Layout, Descriptions } from 'antd';


class Single extends React.Component {
  state = {
    beer: {}
  };

  componentDidMount = async () => {
    const { id } = this.props.match.params;

    const { data: beer } = await axios.get(`https://ih-beer-api.herokuapp.com/beers/${id}`);

    this.setState(() => {
      return { beer };
    });
  };

  componentWillUpdate = async prevProps => {
    const { id } = prevProps.match.params;
    if (id !== this.props.match.params.id) {
      const { data: beer } = await axios.get(`https://ih-beer-api.herokuapp.com/beers/${id}`);
      this.setState(() => {
        return { beer };
      });
    }
  };

  render() {
    const { beer } = this.state;
    return (
      <Layout.Content className="main"
        style={{
          padding: '50px 150px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          minHeight: '85vh'
        }}
      >
        <div
          style={{
            borderRadius: '50%'
          }}
        >
          <img
            src={beer.image_url}
            alt={beer.name}
            style={{
              objectFit: 'contain',
              height: '300px',
              margin: '0 30px'
            }}
          />
        </div>
        <Descriptions title={beer.name}>
          <Descriptions.Item label="Attenuation level">{beer.attenuation_level}</Descriptions.Item>
          <Descriptions.Item label="First brew">{beer.first_brewed}</Descriptions.Item>
        </Descriptions>
        <div>
          <p>{beer.tagline}</p>
          <p>{beer.description}</p>
        </div>
      </Layout.Content>
    );
  }
}

export default Single;
import React, { Component } from 'react'
import { Layout, Icon, Card, Typography } from 'antd'
import { Link } from 'react-router-dom'
import axios from 'axios'
const { Title, Text } = Typography
const { Header, Content } = Layout

class AllBeers extends Component {
  state = {
    beer: {}
  }

  componentDidMount() {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers/random')
      .then(({ data }) => {
        const beer = {
          id: data._id,
          image: data.image_url,
          name: data.name,
          // tagline: data.tagline,
          // contributed_by: data.contributed_by,
          first_brewed: data.first_brewed,
          attenuation_level: data.attenuation_level,
          description: data.description
        }
        this.setState({ beer })
      })
      .catch(error => {
        console.log(`There was an error: ${error}`)
      })
  }

  render() {
    const { beer } = this.state
    if (beer.name === undefined) {
      return <p>Loading details, please wait...</p>
    } else {
      const gridStyle = {
        width: '100%',
        textAlign: 'left',
      };
      const gridStyleImg = {
        width: '100%',
        textAlign: 'center',
      };
      return (
        <Layout>
          <Link to="/">
            <Header style={{ display: 'flex', justifyContent: 'center', background: '#40BBFD' }}>
              <Icon type="home" style={{ fontSize: '32px', color: '#fff', lineHeight: '64px' }} />
            </Header>
          </Link>
          <Content style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            < Card style={{ width: '60vw' }} key={beer.id}>
              <Card.Grid style={gridStyleImg}><img src={beer.image} alt={beer.name} height="150px" /></Card.Grid>
              <Card.Grid style={gridStyle}>
                <Title level={3}>{beer.name}</Title>
                <Title level={4} type="secondary">{beer.tagline}</Title>
                <Text><strong>Attenuation level:</strong> {beer.attenuation_level}</Text><br />
                <Text><strong>First brewed:</strong> {beer.first_brewed}</Text><br />
                <Text>{beer.description}</Text>
              </Card.Grid>
            </Card>
          </Content>
        </Layout >

      )
    }
  }
}

export default AllBeers

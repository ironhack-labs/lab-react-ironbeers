import React, { Component } from 'react'
import { Layout, Icon, Card, Typography } from 'antd'
import { Link } from 'react-router-dom'
import axios from 'axios'
const { Title, Text } = Typography
const { Header, Content } = Layout

class AllBeers extends Component {
  state = {
    beers: []
  }

  componentDidMount() {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers')

      .then(({ data }) => {
        const beers = data.map(beer => (
          {
            id: beer._id,
            image: beer.image_url,
            name: beer.name,
            tagline: beer.tagline,
            contributed_by: beer.contributed_by,
            first_brewed: beer.first_brewed,
            attenuation_level: beer.attenuation_level,
            description: beer.description
          }
        ))
        this.setState({ beers: [...beers] })
      })

      .catch(error => {
        console.log(`There was an error: ${error}`)
      })

  }
  render() {
    const { beers } = this.state
    const gridStyleImg = {
      width: '25%',
      textAlign: 'center',
    };
    const gridStyleDesc = {
      width: '75%',
      textAlign: 'left',
    };
    if (beers.length === 0) {
      return (
        <p>Loading beers, please wait...</p >
      )
    } else {
      return (
        <Layout>
          <Link to="/">
            <Header style={{ display: 'flex', justifyContent: 'center', background: '#40BBFD' }}>
              <Icon type="home" style={{ fontSize: '32px', color: '#fff', lineHeight: '64px' }} />
            </Header>
          </Link>
          <Content style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            {beers.map(beer => (
              < Card style={{ width: '60vw' }} key={beer.id}>
                <Card.Grid style={gridStyleImg}><Link to={`/beers/${beer.id}`}><img src={beer.image} alt={beer.name} height="150px" /></Link></Card.Grid>
                <Card.Grid style={gridStyleDesc}><Link to={`/beers/${beer.id}`}><Title level={3}>{beer.name}</Title><Title level={4} type="secondary">{beer.tagline}</Title><Text><strong>Created by:</strong> {beer.contributed_by}</Text></Link></Card.Grid>
              </Card>
            ))
            }
          </Content>
        </Layout >

      )
    }
  }
}

export default AllBeers

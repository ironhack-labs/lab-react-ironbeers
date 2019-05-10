import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

const { Meta } = Card;

class AllBeers extends Component {
  state = {
    beers: []
  }

  componentDidMount() {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers', {})
      .then(({ data }) => {
        this.setState({ beers: data })
      })
      .catch(error => error)
  }

  render() {
    const { beers } = this.state
    return (
      <>
        {beers.map(e => (
          <div style={{marginLeft: "35%"}}key={e._id}>
          <Link to={e._id}>
            <Card
              hoverable
              style={{ width: 440 }}
              cover={<img alt="example" src={e.image_url} style={{width: "100px", height:"60%", marginLeft: "40%"}}/>}
            >
              <Meta
                title={e.name}
                description={e.tagline}
              /><br></br>
              <p>Contributed by: {e.contributed_by}</p>
            </Card>
          </Link>
          </div>
        ))}
      </>
    )
  }
}

export default AllBeers

import React, { Component } from 'react'
import axios from 'axios'
import LinkToHome from './../Home/LinkToHome'
import { Link } from 'react-router-dom'
import { Card} from 'antd';
const { Meta } = Card;

export default class AllBeers extends Component {
  state = {
    beers: []
  }

  componentDidMount() {
    axios.get('https://ih-beer-api.herokuapp.com/beers')
    
    .then( ({ data }) => {
      this.setState({beers: [...data]})
    })
    .catch( error => console.log(error))
  }


  render() {
    const { beers } = this.state
    return (
        <>
        <LinkToHome/>
        <div style={{display: 'flex', flexDirection:'row',flexWrap:'wrap', justifyContent:'center'}}>
        {beers.map(beer => (
          <Link to={`/beers/${beer._id}`}>
          <Card
    style={{ width: 500, justifyContent:'center' }}
    cover={
      <img
        style={{height:'100px', width:'30px'}}
        alt="example"
        src={beer.image_url}
      />
      
    }
  >
    <Meta
      avatar={beer.name}
      title={beer.tagline}
      description={beer.contributed_by}

    />
  </Card>
  </Link>
        ))}
      </div>
      </>
    )
  }
}
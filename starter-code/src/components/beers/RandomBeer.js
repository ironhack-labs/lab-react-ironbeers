import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'antd';
import LinkToHome from './../Home/LinkToHome'
const { Meta } = Card;

export default class OneBeer extends Component {

  state = {
    beer: {}
  }

  componentDidMount() {
    
    axios.get(`https://ih-beer-api.herokuapp.com/beers`)

    .then( ({data}) => {
      
      const randIndex = Math.floor(Math.random() * (data.length - 1))
      
      this.setState({beer: {...data[randIndex]}})
    })
    .catch(e => console.log(e))
  }
  render() {
    const { beer } = this.state
    return (
      <>
      <LinkToHome/>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', marginTop:'25vh' }}>
         <Card
    hoverable
    style={{ width: 500 }}
    cover={<img alt="example" style={{height:'170px', width:'50px'}} src={beer.image_url} />}
  >
    <Meta title={beer.name} avatar={beer.attenuation_level} description={[
      <p>{beer.tagline}</p>,
      <br/>,
      <ul>
        <li>Description: {beer.description}</li>
        <br/>
        <li>First brewed: {beer.first_brewed}</li>
        <br/>
        <li>Contributed by: {beer.contributed_by}</li>
      </ul>
    ]}
     />
  </Card>
  </div>
  </>
      
    )
  }
}
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Headers from '../components/Header'

import {HomeOutlined} from '@ant-design/icons'
import {Card, Menu, Layout,Typography, Image, Col, Row} from 'antd'
const {Title, Text}=Typography
const {Header, Content}=Layout

const baseURL="https://ih-beers-api2.herokuapp.com/beers/random"

function RandomBeer() {

    const [beer, setBeer]=useState(null)

    useEffect(()=>{
        async function getBeerData(){
            const result=await axios.get(baseURL)
            console.log(result.data)
            setBeer(result.data)
        }
        getBeerData()
    },[])


    return (
        
        <Layout className="layout">
            <Headers/>
            <Content style={{ padding: '10px 40px' }}>
        
            <Card
    style={{ width: "auto",  alignContent:"space-between" }}
  >
      <Row>
      <Col span={24}>
      <Card.Grid style={{textAlign:"center", width:"100%"}}>
      
      <Image src={beer?.image_url} width={60}/>
      </Card.Grid>
      </Col>
      </Row>
      <Row>
          <Col span={12}>
    <Title>{beer?.name}</Title>
    </Col>
    <Col span={12} style={{textAlign:"right"}}>
    <Title type="secondary">{beer?.attenuation_level}</Title>
    </Col>
    </Row>
    <Row>
          <Col span={12}>
    <Text type="secondary">{beer?.tagline}</Text>
    </Col>
    <Col span={12} style={{textAlign:"right"}}>
    <Text>{beer?.first_brewed}</Text>
    </Col>
    </Row>
    <br/>
    <Row>
          <Col span={24}>
    <Text level={2} >{beer?.description}</Text>
    </Col>
    </Row>
    <Row>
          <Col span={24}>
    <Text level={3} type="secondary" >{beer?.contributed_by}</Text>
    </Col>
    </Row>


  </Card>


        </Content>
        </Layout>    )
}

export default RandomBeer

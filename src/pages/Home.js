import React from 'react'
import {Link} from 'react-router-dom'

import {Card, Layout,Typography} from 'antd'
const {Title, Text}=Typography
const {Content}=Layout


function Home() {

    
    

    return (
        <Layout className="layout">
            <Content style={{ padding: '10px 40px' }}>
              <Card
    hoverable
    style={{ width: "auto" }}
    extra={<Link to={'/beers'}>
    <img alt="beers1" src="../images/beers1.jpg" width="100%" />
    <Title>All Beers</Title>
    <Text type="secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptatibus doloribus fugiat molestiae ipsum reiciendis corporis placeat. Rerum perspiciatis amet id deserunt dolorem officiis qui illo at, praesentium assumenda quia.</Text>
    </Link>}
  >
  </Card>
  <br/>
  <Card
    hoverable
    style={{ width: "auto" }}
    extra={<Link to={'/random-beer'}>
    <img alt="beers2" src="../images/beers2.jpg" width="100%"/>
    <Title>Random Beer</Title>
    <Text type="secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptatibus doloribus fugiat molestiae ipsum reiciendis corporis placeat. Rerum perspiciatis amet id deserunt dolorem officiis qui illo at, praesentium assumenda quia.</Text>
    </Link>}
  >
  </Card>
  <br/>
  <Card
    hoverable
    style={{ width: "auto" }}
    extra={<Link to={'/new-beer'}>
    <img alt="beers3" src="../images/beers3.jpg" width="100%"/>
    <Title>New Beer</Title>
    <Text type="secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptatibus doloribus fugiat molestiae ipsum reiciendis corporis placeat. Rerum perspiciatis amet id deserunt dolorem officiis qui illo at, praesentium assumenda quia.</Text>
    </Link>}
  >
  </Card>
  <br/>
  </Content>
        </Layout>
    )
}

export default Home

import React, { Component } from 'react'
import { Layout, Row, Col, Typography } from 'antd'
import { Link } from 'react-router-dom'
const { Content, Footer, Header } = Layout
const { Title, Paragraph } = Typography

export class Home extends Component {

  render() {
    return (
      <Layout>
        <Link to="/">
          <Header style={{ display: 'flex', alignItems: 'middle', justifyContent: 'center', background: '#40BBFD' }}>
            <Title style={{ lineHeight: '64px', color: '#fff' }}>Welcome to Ironbeers!</Title>
          </Header>
        </Link>
        <Content>
          <Row type="flex" justify="center" className="rows">
            <Col >
              <Link to="/beers">
                <img src="/images/beers.png" alt="Show all beers" />
                <Title>All Beers</Title>
              </Link>
              <Paragraph style={{ width: '70vw' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, tempore totam, harum veniam veritatis fugit quidem libero ex commodi molestiae facilis mollitia cupiditate obcaecati ipsum? Ducimus expedita incidunt commodi impedit.
                Architecto cum ducimus expedita facilis iusto! Neque voluptatem, mollitia odio tempora deserunt, recusandae eius ipsam voluptate, rem delectus quasi earum molestias natus aspernatur provident labore ipsum ducimus minima iusto debitis.
                Quod, modi hic cupiditate eligendi dignissimos cumque repudiandae, porro id nesciunt unde facilis non ut? In beatae accusamus, veritatis perferendis inventore voluptate eum qui dolor nam ullam aperiam, rem dolore.
              </Paragraph>
            </Col>
          </Row>
          <Row type="flex" justify="center" className="rows">
            <Col>
              <Link to="/random-beer">
                <img src="./images/random-beer.png" alt="Show a random beer" />
                <Title>Random Beer</Title>
              </Link>
              <Paragraph style={{ width: '70vw' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, tempore totam, harum veniam veritatis fugit quidem libero ex commodi molestiae facilis mollitia cupiditate obcaecati ipsum? Ducimus expedita incidunt commodi impedit.
                Architecto cum ducimus expedita facilis iusto! Neque voluptatem, mollitia odio tempora deserunt, recusandae eius ipsam voluptate, rem delectus quasi earum molestias natus aspernatur provident labore ipsum ducimus minima iusto debitis.
                Quod, modi hic cupiditate eligendi dignissimos cumque repudiandae, porro id nesciunt unde facilis non ut? In beatae accusamus, veritatis perferendis inventore voluptate eum qui dolor nam ullam aperiam, rem dolore.
              </Paragraph>
            </Col>
          </Row>
          <Row type="flex" justify="center" className="rows">
            <Col>
              <Link to="/new-beer">
                <img src="./images/new-beer.png" alt="Add a new beer" />
                <Title>New Beer</Title>
              </Link>
              <Paragraph style={{ width: '70vw' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, tempore totam, harum veniam veritatis fugit quidem libero ex commodi molestiae facilis mollitia cupiditate obcaecati ipsum? Ducimus expedita incidunt commodi impedit.
                Architecto cum ducimus expedita facilis iusto! Neque voluptatem, mollitia odio tempora deserunt, recusandae eius ipsam voluptate, rem delectus quasi earum molestias natus aspernatur provident labore ipsum ducimus minima iusto debitis.
                Quod, modi hic cupiditate eligendi dignissimos cumque repudiandae, porro id nesciunt unde facilis non ut? In beatae accusamus, veritatis perferendis inventore voluptate eum qui dolor nam ullam aperiam, rem dolore.
              </Paragraph>
            </Col>
          </Row>
        </Content>
        <Footer>
        </Footer>
      </Layout >

    )
  }
}

export default Home

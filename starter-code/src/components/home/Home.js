import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Typography, Button } from 'antd'
const { Title, Paragraph } = Typography

function Home() {

  return (
    <div width='100vw' height='100vh'>
      <Card hoverable
        width='100vw'
        cover={<img alt="example" src="../images/beers.png" />}>
        <Title>Show all beers</Title>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aliquam voluptatem doloremque ullam perferendis!
          Cupiditate unde non ullam, error libero sequi eligendi. Tempora excepturi explicabo, enim earum aperiam libero quidem!
        </Paragraph>
        <Link to="/beers">
          <Button>All beers</Button>
        </Link>
      </Card>
      <Card hoverable
        width='100vw'
        cover={<img alt="example" src="../images/random-beer.png" />}>
        <Title>Show a random beer</Title>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aliquam voluptatem doloremque ullam perferendis!
          Cupiditate unde non ullam, error libero sequi eligendi. Tempora excepturi explicabo, enim earum aperiam libero quidem!
        </Paragraph>
        <Link to="/beers/random">
          <Button>Random beer</Button>
        </Link>
      </Card>
      <Card hoverable
        width='100vw'
        cover={<img alt="example" src="../images/new-beer.png" />}>
        <Title>Add a new beer</Title>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aliquam voluptatem doloremque ullam perferendis!
          Cupiditate unde non ullam, error libero sequi eligendi. Tempora excepturi explicabo, enim earum aperiam libero quidem!
        </Paragraph>
        <Link to="/beers/new">
          <Button>New beer</Button>
        </Link>
      </Card>
    </div>
  )
}

export default Home
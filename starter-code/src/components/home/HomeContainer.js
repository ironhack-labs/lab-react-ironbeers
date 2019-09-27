import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Typography, Button } from 'antd'
const { Title, Paragraph } = Typography

export default function HomeContainers() {
  return (
    <div className="container">
      <Title>HOME</Title>
      <Card  style={{ width: 300}} hoverable cover={<img alt="example" src="../images/beers.png" />}>
      <Link to="/beers"><Title>All Beers</Title> </Link>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aliquam voluptatem doloremque ullam perferendis!
          Cupiditate unde non ullam, error libero sequi eligendi. Tempora excepturi explicabo, enim earum aperiam libero quidem!
        </Paragraph>
      
      </Card>
      <Card hoverable cover={<img alt="example" src="../images/random-beer.png" />}>
      <Link to="/beers/random"><Title>Random Beer</Title></Link>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aliquam voluptatem doloremque ullam perferendis!
          Cupiditate unde non ullam, error libero sequi eligendi. Tempora excepturi explicabo, enim earum aperiam libero quidem!
        </Paragraph>
      </Card>
      <Card hoverable cover={<img alt="example" src="../images/new-beer.png" />}>
      <Link to="/beers/new"><Title>Add a New bBer</Title></Link>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aliquam voluptatem doloremque ullam perferendis!
          Cupiditate unde non ullam, error libero sequi eligendi. Tempora excepturi explicabo, enim earum aperiam libero quidem!
        </Paragraph>
        
      </Card>
    </div>
  )
}


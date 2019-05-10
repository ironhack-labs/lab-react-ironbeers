import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'antd'
const { Meta } = Card;

function CardComponent({ title, description, url, image }) {
  return (
    <div>
      <Card
       hoverable
       style={{ width: 240 }}
       cover={<img alt="example" src={image} />}
       >
        <Meta
          title={title}
        />
         <Link to={url}>
            <Button>{description}</Button>
        </Link>
      </Card>,
    </div>
  )
}

export default CardComponent

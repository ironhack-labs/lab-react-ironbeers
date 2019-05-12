import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'antd'

function CardComponent({ title, description, url }) {
  return (
    <div>
      <Card title={title}>
        <Link to={url}>
          <Button>{description}</Button>
        </Link>
      </Card>
    </div>
  )
}

export default CardComponent

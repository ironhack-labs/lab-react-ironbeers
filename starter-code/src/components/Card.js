import React from 'react'
import { Link } from 'react-router-dom';

import { Card } from 'antd';

const { Meta } = Card;

const Carta = (props) => {
 return(
<Link to={`/${props.path}`}>
  <Card
    hoverable
    style={{ width: 400 }}
    cover={<img alt="beer" src={props.imagen} />}
    >
    <Meta title={props.title} description={props.texto} />
    </Card>
  </Link>
 )
}

export default Carta


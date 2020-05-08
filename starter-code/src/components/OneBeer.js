import React from 'react'

import { Card } from 'antd';

const { Meta } = Card;

const OneBeerDetail = (props) =>{
 return (
<Card className='beerDetail'
    style={{ width: 300 }}
    cover={  <img alt="BeerDetail" src={props.image} style={{width: 150, }}/> }>
    <Meta
      title={props.title}
      description={props.description}
    />
  </Card>
  )
}

export default OneBeerDetail
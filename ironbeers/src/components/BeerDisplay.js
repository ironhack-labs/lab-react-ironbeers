import React from 'react'
import { Card} from 'antd';
const { Meta } = Card;
const BeerDisplay = (info) => {
  var beer = info.info
  return(
    <Card
    hoverable
    bordered
    style={{ width: 300 }}
    cover={<img src={beer.image_url} style={{width: '60px'}} alt={'photo of' + beer.name}/>}
    >
   <Meta        
   title={beer.name}
   description={beer.description}
    />  
    <h4>{beer.tagline}</h4>
    <h3> Level: {beer.attenuation_level}</h3>    
    <h5>Brewer Tips</h5>
    <p>{beer.brewers_tips}</p>
    </Card>
  )
}

export default BeerDisplay
import React from 'react'
import {Layout, Pagination, Card, Icon} from 'antd'
import {Link} from 'react-router-dom'
const{Content} = Layout
const {Meta} = Card

function Beers ({from, to, handleChange, beers})  {
    return (
        <Content style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'Center'}}>
            <div style={{padding: '0 50px', display: 'flex', flexWrap: 'wrap', justifyContent:'Center', alignItems: 'flex-start'}}>
                {beers.slice(from, to).map(beer=>(
                     <Card
                     key={beer._id}
                     style={{ width: 400}}
                     cover={
                         <div style={{height: '250px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '15px'}}>
                       <img 
                         alt={beer.name}
                         src={beer.image_url}
                         style={{width: '100%', height: '100%', objectFit: 'contain'}}
                         />
                         </div>
                     }
                     actions={[
                        <Link to={`/beers/${beer._id}`}><Icon type="github" key={beer._id} /></Link>
                      ]}
                      >
                      <Meta
                      title={beer.name}
                      description={<div>
                          <p>{beer.tagline}</p>
                          <p><b>{beer.contributed_by}</b></p>
                      </div>}/>
                      </Card>
                ))}
            </div>
            <Pagination 
            defaultCurrent={1}
            defaultPageSize={10}
            onChange={handleChange}
            total={beers.length}
            />
        </Content>
    )
}


export default Beers

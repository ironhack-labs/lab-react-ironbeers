import React from 'react'
import {Link} from 'react-router-dom'
import {Layout, Pagination, Card, Icon} from 'antd'

const{Content} = Layout



function Beers ({from, to, handleChange, beers}) {


    return (
        <Content>
            <div style={{padding: '0 50px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start'}}>
                {beers.slice(from, to).map(beer=>(
                     <Card
                     key={beer._id}
                     style={{ width: 300 }}
                     cover={
                       <div style={{display: 'flex', height: '300px', width: '220px', justifyContent: 'center', flexWrap: 'wrap'}}>
                       <img 
                         alt={beer.name}
                         src={beer.image_url}
                         style={{width: '100%', height:'100%', objectFit: 'contain' }}
                       />
                       <p>{beer.tagline}</p>
                       <p>{beer.contributed_by}</p>
                      
                       <p><Link to= {`/beers/${beer._id}`}>Details</Link></p>
                       </div>
                     }
                     actions={[
                        <Icon type="plus.circle" key={beer._id} />,
                      ]}
                      />
                      
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
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Headers from '../components/Header'

import {HomeOutlined} from '@ant-design/icons'
import { Menu, Layout,Typography,List, Avatar, Image} from 'antd'
const {Header, Content}=Layout

const baseURL='https://ih-beers-api2.herokuapp.com/beers'


function ListBeers() {


    const [beers, setBeers]= useState(null)

    useEffect(()=>{
        async function getBeers(){
            const results=await axios.get(baseURL)
            setBeers(results.data)
        }
        getBeers()
    },[])



    return (

        <Layout className="layout">
            <Headers/>
            <Content style={{ padding: '10px 40px', alignItems:"center" }}>
                
                {beers?<h1>{beers.map((beer,i)=><List
    itemLayout="horizontal"
    dataSource={beers}
    renderItem={item => (
        <Link to={`/beers/${item._id}`}><List.Item>
        <List.Item.Meta
          avatar={<Image width="60px"  src={item.image_url} />}
          title={<a href="https://ant.design">{item.name}</a>}
          description={'"'+ item.tagline+'"'+'  Created by:'+ item.contributed_by}          
        />
      <hr/>
    
      </List.Item>  </Link>
    )}
  />)}</h1>: <h1>Loading...</h1>   }
        </Content>
        </Layout>    
        )
}


export default ListBeers

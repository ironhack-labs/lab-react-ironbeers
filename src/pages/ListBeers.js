import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import {HomeOutlined} from '@ant-design/icons'
import {Card, Menu, Layout,Typography} from 'antd'
const {Title, Text}=Typography
const {Header, Content}=Layout

const baseURL='https://ih-beers-api2.herokuapp.com/beers'


function ListBeers() {


    const [beers, setBeers]= useState(null)

    useEffect(()=>{
        async function getBeers(){
            const {data:{results}}=await axios.get(baseURL)
            setBeers(results)
        }
        getBeers()
    },[])


    return (

        <Layout className="layout">
            <Header>
               
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Link to={'/'}>
        <Menu.Item key="1" icon={<HomeOutlined/>}></Menu.Item>
        </Link>
      </Menu>
            </Header>
            <Content style={{ padding: '10px 40px' }}>
        
            <h1>List Beers</h1>

        </Content>
        </Layout>    
        )
}


export default ListBeers

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Headers from '../components/Header'

import {HomeOutlined} from '@ant-design/icons'
import {Card, Menu, Layout,Typography} from 'antd'
const {Title, Text}=Typography
const {Header, Content}=Layout

function NewBeer() {
    return (
        <Layout className="layout">
            <Headers/>
            <Content style={{ padding: '10px 40px' }}>
        
            <h1>New Beer</h1>

        </Content>
        </Layout>   
    )
}

export default NewBeer

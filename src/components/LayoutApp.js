import React, { useState } from "react"
import { Layout } from 'antd';
import { Link } from "react-router-dom"
const { Header, Footer, Sider, Content } = Layout;

function LayoutApp({children}) {
    return (
        <>
            <Layout>
            <Header>
                <Link to='/'>HOME</Link>
            </Header>
            <Content>
                {children}
            </Content>
            <Footer>Created with love by Ironhackers</Footer>
            </Layout>
        </>
    )
}

export default LayoutApp

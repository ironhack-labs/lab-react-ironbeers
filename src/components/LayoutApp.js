import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'
import {HomeOutlined} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

export default function LayoutApp({ children }) {
    return (
        <Layout>
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
                <Link to='/'>
                {<HomeOutlined />}
            </Link>
            </Menu.Item>

            </Menu>
        </Header>
        <Content >
            <div >{
            children
            }</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

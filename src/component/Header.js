import React from 'react'
import { Link } from 'react-router-dom'
import {
    HomeOutlined,
} from '@ant-design/icons';

const Header = () => {
    return (
        <Link to={'/'} style={{ minWidth: "100vw", height: 80, backgroundColor: "#3dc4fb", color: "white", border: 'none', fontSize: '3rem', display: 'block', textAlign: 'center' }}>
            <HomeOutlined />
        </Link>
    )
}

export default Header

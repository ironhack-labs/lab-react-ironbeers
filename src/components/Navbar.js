import React from 'react'
import {Button, Row, Col} from 'antd'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <Row>
          <Col span={24}>
            <Link to="/" style={{margin: 30,display: "flex", justifyContent: "center", width: "100%"}}>
                <Button type="primary">Home</Button>
            </Link>
          </Col>  
        </Row>
    )
}

export default Navbar

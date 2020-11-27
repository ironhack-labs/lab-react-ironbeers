import React, {useState, useEffect} from 'react'
import { getAllBeers, searchBeer } from '../services/Beers'
import { Card, Row, Col, Skeleton, Input } from 'antd'
import {Link} from 'react-router-dom'
const { Search } = Input;

const { Meta } = Card;

const Beers = () => {
    const [beers, setBeers] = useState(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
        async function getBeers() {
            try {
                const {data: allBeers} = await getAllBeers()
                if (search === '') {
                    setBeers(allBeers)
                } else {
                    const newArr = [...allBeers].filter(b => b.name.toUpperCase().includes(search.toUpperCase()))
                    setBeers(newArr)
                }
            }
            catch(err) {
            console.log(err)
        }
    }
    getBeers()
}, [search])

function onSearch(e) {
    setSearch(e.target.value)
}


    return (
        <div className="site-card-wrapper">
            <Row gutter={[16, 16]}>
            <Col offset={2} span={20}>
            <Input placeholder="input search text" onChange={onSearch} />
            </Col>
            {beers ? beers.map(b=>{
                return ( 
                <Col offset={2} xs={20} sm={10} lg={5}>
                <Link to={`/beer/${b._id}`}>
                <Card
                    style={{ width: 300, margin: "30px auto" }}
                    cover={
                    <img style={{
                        height: 200,
                        width: "auto",
                        margin: "0 auto"
                    }}
                        alt={b.name}
                        src={b.image_url}
                    />
                    }>
                    <Meta
                    title={b.name}
                    description={`${b.tagline} Created by: ${b.contributed_by}`}
                    />
                </Card>
                </Link>
                </Col>    
                )
            }) : <Skeleton />}
            </Row>
        </div>
    )
}

export default Beers

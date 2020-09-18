import React, {useState, useEffect} from 'react'
import HeaderLayout from "../components/Header"
import {getBeerbyId, getRandomBeer} from "../services/BeerService"
import { Card, Spin, Space, Row, Col } from "antd"
import { Link } from "react-router-dom"

const Beer = (props) => {

    const [beer, setBeer] = useState(null)

    const fetchOneBeer = async () => {
        console.log(props)
        const beer = await getBeerbyId(props.match.params.id)
        setBeer(beer)
    }

    const fetchRandomBeer = async() => {
        const beer = await getRandomBeer()
        setBeer(beer)
    }

    useEffect(() => {
        let exists = props.match.params.id ? true : false;
        if(exists)
            fetchOneBeer()
        else
            fetchRandomBeer()
    }, [])

    return (
        <div>
            <Row>
            {/* Aqui va el Header */}
            </Row> 
            <HeaderLayout>
            <center style={{ height: "100vh", display: "flex", alignItems: "center" }}>
            <Row>
                {beer ? (
                    <div>
                        <img style={{width: "100px", height: "200px", objectFit: "cover"}} src={beer.image_url} alt={beer.name}/>
                        <h1>
                            {beer.name}
                        </h1>
                        <p>{beer.tagline}</p>
                        <p>{beer.first_brewed}</p>
                        <p>{beer.first_brewed}</p>
                        <p>{beer.attenuation_level}</p>
                        <p>{beer.description}</p>
                        <p>{beer.contributed_by}</p>

                    </div>
                ) : (
                <Space size='large'>
                    <Spin size='large' />
                </Space>
                )}
            </Row>
            </center>
            </HeaderLayout>
        </div>
    )
}

export default Beer

import React, {useState, useEffect }from 'react'
import {getOneBeerRandom} from "../services/getAllBeers"
import {Row, Space, Spin} from 'antd'
import Header from './Header.js'

const RandomBeer = (props) => {
    const [beer, setBeer]= useState(null)

useEffect(  ()=>{
    async function oneRandom(){
    const data=  await getOneBeerRandom()
    setBeer(data)
    }
    oneRandom ()
}, [])


    return (
        <div>
            <Header/>
                <center style={{ height: "100vh", display: "flex", alignContent: "center", marginTop:'20px' }}>
            <Row>
                {beer ? (
                    <div>
                        <img style={{width: "60px", height: "auto", objectFit: "cover"}} src={beer.image_url} alt={beer.name}/>
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
        </div>
    )
}

export default RandomBeer
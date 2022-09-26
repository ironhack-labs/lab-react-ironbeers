import { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import BeerAxios from '../services/BeersAxios';
import React from 'react'
import Container from "react-bootstrap/container";
import Row from "react-bootstrap/row";


const Beers = () => {

    const Instance = new BeerAxios()
    const [beers, setBeers] = useState([])


    useEffect(() => {
        Instance.getAllBeers().then((BeersApi) => {
            console.log(BeersApi)
            setBeers(BeersApi)
        })
    }, []);



    return (

        <ListGroup>
            {
                beers.map(AllBeersApi => {
                    return (
                        <ListGroup.Item>
                            <Container>
                                <Row>
                                    {/* <img className='col-3' src={AllBeersApi.image_url} alt="BeerImage" /> */}
                                    <div className='col'>
                                        <img className='col-3' src={AllBeersApi.image_url} alt="BeerImage" />
                                        <h3>{AllBeersApi.name}</h3>
                                        <h5>{AllBeersApi.tagLine}</h5>
                                        <p><strong>Made by:</strong> {AllBeersApi.contributed_by}</p>
                                    </div>
                                </Row>
                            </Container>
                        </ListGroup.Item>
                    )
                })
            }
        </ListGroup>



        // <>
        //     <h1>All Beers!!!!!</h1>
        //     {beers.map(allBeersApi => {
        //         return (
        //             <div>{allBeersApi.name}</div>
        //         )
        //     })}
        // </>

    )
}

export default Beers;
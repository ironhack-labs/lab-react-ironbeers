import beersService from "../services/beers.services";
import { useEffect, useState } from 'react'
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";




const AllBeersPage = () =>{

    const [beers, setBeers] = useState(null)

    useEffect (() => {
        loadBeers()
    },[])

    const loadBeers = () => {
        beersService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    if (beers === null){
        return (<h1>loading ...</h1>)
    }

    console.log("----", beers)

    return(
    <div className="AllBeersPage">
                 <Row>
                     {beers.map((item) => {
                             return (
                                 <>
                                  <Link to={`/${item._id}`}>
                                        <Card className="text-center">
                                            <Card.Header>{item.name}</Card.Header>
                                            <Card.Body>
                                                <Card.Title><img src={item.image_url} style={{ width: '15%' }}/></Card.Title>
                                                <Card.Text>{item.tagline}</Card.Text>
                                                <Card.Text>{item.contributed_by}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>





                                 </>
                             );
                     })}
                 </Row>
     </div>
    )  
     
}

export default AllBeersPage;

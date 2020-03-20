import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Header from "../layouts/Header";
import { getBeerById } from "../lib/beers.api"
import Loading from "../components/Loading"
import styled from "styled-components"
import _ from "lodash";

const BeerStyle = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding: 4vh 0;
width: 100vw;
height:100vh;
color:black;
img {
    height:40vh;
    width:auto;
}
.row{
    display:flex;
    justify-content:space-between;
    align-items:center;

}
.beerPic{
    margin-bottom:5vh;
    display:flex;
    justify-content:center;
}
.beerInfo {
    width:80vw;
} 
p {
    margin:0;
    margin-bottom:4vh;
}
h1,h4 {
    margin:0;
}
`

const BeerInfoPage = (({ beerId }) => {
    const [beer, setBeer] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => { getBeerById(beerId).then(beer => setBeer(beer)).finally(() => setLoading(false)) }, []);
    console.log(beer)

    return (
        <>
            <Header />
            {loading && <Loading />}

            <BeerStyle>
                <div className="beerPic">
                    <img src={beer.image_url} alt={beer.name} />
                </div>
                <div className="beerInfo">
                    <div className="row">
                        <h1>{beer.name}</h1>
                        <h4>{beer.attenuation_level}</h4>
                    </div>
                    <div className="row">
                        <h3>{beer.tagline}</h3>
                        <p>{beer.first_brewed}</p>
                    </div>
                    <p>{beer.description}</p>
                    <span>{_.replace(beer.contributed_by, /<.*?>/g, '')}</span>
                </div>
                <Link to="/beers" style={{ textDecoration: 'none' }}>Back to beers</Link>

            </BeerStyle>
        </>);
});

export default BeerInfoPage;
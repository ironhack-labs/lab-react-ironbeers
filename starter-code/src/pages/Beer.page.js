import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Header from "../layouts/Header";
import getBeers from "../lib/beers.api"
import styled from "styled-components"
import _ from "lodash"
import Loading from "../components/Loading"

const BeerStyle = styled.div`
border-bottom: 1px solid lightgrey;
display:flex;
padding: 2vh 2vw;
justify-content:space-between;
width:100%;
height:15vh;
color:black;
img {
    height:15vh;
    width:auto;
}
.beerPic{
    padding-left:3vw;
    width: 20vw;
    display:flex;
    justify-content:center;
}
.beerInfo {
    width:70vw;
} 
h4 {
    margin:5px 0;
}
`



const BeerPage = () => {
    const [beers, setBeers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => { getBeers().then(beers => setBeers(beers)).finally(() => setLoading(false)) }, []);


    return (<>
        <Header />
        {loading && <Loading />}
        {beers.map((b, i) => (
            <Link to={`/beers/${b._id}`} style={{ textDecoration: 'none' }} key={i}>
                <BeerStyle>
                    <div className="beerPic">
                        <img src={b.image_url} alt={b.name} />
                    </div>
                    <div className="beerInfo">
                        <h2>{b.name}</h2>
                        <h4>{b.tagline}</h4>
                        <p>Created by: {_.replace(b.contributed_by, /<.*?>/g, '')}</p >
                    </div>
                </BeerStyle>
            </Link>)
        )}
    </>
    )

};

export default BeerPage;
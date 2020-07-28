import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function BeerCard({img, name, tagline, contributed_by, id}){

    const StyledBeerCard = styled.div`
        display: grid;
        max-width: 100%;
        grid-template-columns: 30% 70%;
        gap: 10px 0;
        margin: 10px 0;

        .img-box {
            background-image: url(${img});
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        }

        span, h5 {
            color: gray;
        }
    `

    return (
        <StyledBeerCard>
            <div className="img-box" loading="lazy">
            </div>
            <div>
                <h4>{name}</h4>
                <h5>{tagline}</h5>
                <p><strong>Created by:</strong> <span>{contributed_by}</span></p>
                <Link to={`/beers/${id}`}>See details</Link>
            </div>
        </StyledBeerCard>
    )
}

export default BeerCard
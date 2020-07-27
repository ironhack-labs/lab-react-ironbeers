import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import data from '../data/home-data.json'

const StyledHome = styled.div`

    img {
        width: 100%;
        height: 23.5vh;
    }
    a {
        text-decoration: none;
        color: black;
    }
    .features {
        margin-left: 1em;
        margin-bottom: 1.5em
    }
    .title {
        font-weight: 400;
        font-size: 1.7em;
    }
    .description {
        color: gray;
    }
`

function Home() {

    const homeData = [...data]

    const renderData = homeData.map(article =>(
        <Link to={article.link}>
            <article>
                <img src={article.img} alt={article.title}/>
                <div className="features">
                    <h2 className="title">{article.title}</h2>
                    <p className="description">{article.description}</p>
                </div>
            </article>
        </Link>
    ))

    return (
        <StyledHome>
            {renderData}
        </StyledHome>
        
    )
}

export default Home
import React from "react";
import { Link } from "react-router-dom";
import { LoremIpsum } from "lorem-ipsum";
import styled from "styled-components";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 3,
        min: 3
    },
    wordsPerSentence: {
        max: 8,
        min: 7
    }
});

const HomeStyles = styled.div`
position:absolute;
top:0;`

const CardStyles = styled.div`
.card-content{
    padding: 0 4vw;
}
img {
    width:100vw;
}
`

const Card = ({ route, title, text }) => (
    <CardStyles>
        <Link to={route}>
            <img src={"images" + route + ".png"} alt={title} /></Link>
        <div className="card-content">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    </CardStyles>
);

const HomePage = () => (
    <HomeStyles>
        <Card route={"/beers"} title={"All Beers"} text={lorem.generateParagraphs(1)} />
        <Card route={"/random-beer"} title={"Random Beer"} text={lorem.generateParagraphs(1)} />
        <Card route={"/new-beer"} title={"New Beer"} text={lorem.generateParagraphs(1)} />
    </HomeStyles>
);

export default HomePage;
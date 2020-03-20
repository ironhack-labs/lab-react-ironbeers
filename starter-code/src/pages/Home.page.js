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

const CardStyles = styled.div`
.card-content{
    font-family: 'Roboto', sans-serif;
    padding: 0 4vw;
    font-size:11pt;
    p {
        font-weight:100;
        font-size:9pt;
        margin:0;
        margin-bottom: 3vh;
        color:grey;
        font-weight:100;
    }
    h2 {font-weight:300;
        font-size:13pt;
        margin-bottom:0;
        margin-top:1vh;
    }
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

const HomePage = () => (<>
    <Card route={"/beers"} title={"All Beers"} text={lorem.generateParagraphs(1)} />
    <Card route={"/random-beer"} title={"Random Beer"} text={lorem.generateParagraphs(1)} />
    <Card route={"/new-beer"} title={"New Beer"} text={lorem.generateParagraphs(1)} />
</>
);

export default HomePage;
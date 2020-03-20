import React, { useState, useEffect } from "react";
import Header from "../layouts/Header";
import Loading from "../components/Loading"
import { getRandomBeer, addNewBeer } from "../lib/beers.api"
import styled from "styled-components";
import { withRouter } from "react-router-dom";



const FormStyles = styled.div`
height:80vh;
display:flex;
flex-wrap:wrap;
float-direction:column;
align-items:center;
padding: 4vh 4vw;
.field{
    padding-left:3vw;
    width:80vw;
    display:flex;
    justify-content:space-between;
}
button{
    background-color:deepskyblue;
    border: 0px;
    color:white;
    font-size:16px;
    padding: 10px;
    border-radius: 4px;
    margin: 0 auto;
}
`
const TitleStyle = styled.div`
width:100vw;
display:flex;
justify-content:center;
h1{
margin:3vh 0;
padding:0;}
`

const NewBeerPage = withRouter(({ history }) => {
    const [loading, setLoading] = useState(true);
    const [example, setExample] = useState("");
    useEffect(() => { getRandomBeer().then(example => setExample(example)).finally(() => setLoading(false)) }, [])

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirst_brewed] = useState("");
    const [brewers_tips, setBrewers_tips] = useState("");
    const [attenuation_level, setAttenuation_level] = useState([]);
    const [contributed_by, setContributed_by] = useState("");



    const handleSubmit = async (beer) => {
        setLoading(true);
        console.log(beer)
        try {
            addNewBeer(beer).then().finally(setLoading(false));
            history.push("/")
        }
        catch (e) {
            console.log(e)
        }
    }


    return (<>
        {loading && <Loading />}
        <Header />
        <TitleStyle>
            <h1>Contribute by adding a beer</h1>
        </TitleStyle>
        <form onSubmit={e => {
            e.preventDefault();
            handleSubmit({ name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by });
        }}>
            <FormStyles>
                <div className="field">
                    <label htmlFor="name">Name </label>
                    <input type="text" id="name" value={name} placeholder={example.name} onChange={e => setName(e.target.value)} required />
                </div>
                <div className="field">
                    <label htmlFor="tagline">Tagline</label>
                    <input type="text" id="tagline" value={tagline} placeholder={example.tagline} onChange={e => setTagline(e.target.value)} required />
                </div>
                <div className="field">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" value={description} placeholder={example.description} onChange={e => setDescription(e.target.value)} required />
                </div>
                <div className="field">
                    <label htmlFor="first_brewed">First brewed </label>
                    <input type="text" id="first_brewed" value={first_brewed} placeholder={example.first_brewed} onChange={e => setFirst_brewed(e.target.value)} required />
                </div>
                <div className="field">
                    <label htmlFor="brewers_tips">Brewers tips </label>
                    <input type="text" id="brewers_tips" value={brewers_tips} placeholder={example.brewers_tips} onChange={e => setBrewers_tips(e.target.value)} required />
                </div>
                <div className="field">
                    <label htmlFor="attenuation_level">Attenuation level </label>
                    <input type="number" id="attenuation_level" value={attenuation_level} placeholder={example.attenuation_level} onChange={e => setAttenuation_level(e.target.value)} required />
                </div>
                <div className="field">
                    <label htmlFor="contributed_by">Contributed by </label>
                    <input type="text" id="contributed_by" value={contributed_by} placeholder={example.contributed_by} onChange={e => setContributed_by(e.target.value)} required />
                </div>
                <button type="submit">
                    Add new beer
                </button>
            </FormStyles>

        </form>
    </>

    )
});

export default NewBeerPage;
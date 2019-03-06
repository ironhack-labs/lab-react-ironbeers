import React from 'react';
import HomeCard from './misc/HomeCard';


const Home = () => (
  <div className="container">
    <HomeCard name="All Beers" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQYA1_K_0LwYM4trLx0iCrHQTGK7xYxObGdqvoUMvWUnL4PN2a" link="/beers"/>
    <HomeCard name="Random Beer" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQUljeDg27k8Og0ml5V3na5SFop2_C-b9-22sDgaqyhJO8oSUPA" link="/random-beer"/>
    <HomeCard name="New Beer" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbCVKXpkh44nfxu5Rlpq5HGIA3Cj-MwBOI1oXlYmNpc37RHfXK" link="/new-beer"/>    
  </div>    
)

export default Home;

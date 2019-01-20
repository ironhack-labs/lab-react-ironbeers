import React from 'react';
import ItemMenu from '../components/ItemMenu';

const Home = () => {
  return (
    <div className="mainMenu">
      <ItemMenu to="beers" linkName="All Beers">Lorem fistrum pecador apetecan por la gloria de mi madre te va a hasé pupitaa tiene musho peligro. Al ataquerl sexuarl llevame al sircoo tiene musho peligro.</ItemMenu>
      <ItemMenu to="random-beer" linkName="Random Beer">De la pradera al ataquerl por la gloria de mi madre por la gloria de mi madre te va a hasé pupitaa se calle ustée ese pedazo de me cago en tus muelas fistro al ataquerl está la cosa muy malar.</ItemMenu>
      <ItemMenu to="new-beer" linkName="New Beer">Te voy a borrar el cerito no puedor jarl la caidita pecador por la gloria de mi madre condemor ese hombree jarl benemeritaar al ataquerl. No puedor papaar quietooor por la gloria de mi madre no puedor.</ItemMenu>
    </div>
  );
}

export default Home;

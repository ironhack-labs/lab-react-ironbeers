import "./App.css";

import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";



function App() {
  return (
    <Switch>

      <Route exact path="/" pages={HomePage} />


      <Route path="/beers" pages={AllBeersPage} />


      <Route path="/random-beer" pages={RandomBeerPage} />


      <Route path="/new-beer" pages={AddBeerPage} />


      <Route path="/beers/:beerId" pages={BeerDetailsPage} />
    </Switch>
  );
};
<div className="App">
  <h1>LAB | React IronBeers</h1>
</div>


export default App;

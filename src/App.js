import "./App.css";
import "./stylesheets/HomePage.css";
import "./stylesheets/ListBeersPage.css";
import "./stylesheets/SingleBeerPage.css";
import "./stylesheets/RandomBeer.css";
import "./stylesheets/NewBeerPage.css";

//Routes
import { Route, Routes } from "react-router-dom";

//Importing pages
import HomePage from "./pages/HomePage";
import ListBeersPage from "./pages/ListBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import NewBeerPage from "./pages/NewBeerPage";
import SingleBeerPage from "./pages/SingleBeerPage";

//Importing components
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<ListBeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
        <Route path="/beers/:id" element={<SingleBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;

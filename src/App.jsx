import "./App.css"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import AllBeersPage from "./pages/AllBeersPage.jsx"
import RandomBeerPage from "./pages/RandomBeerPage.jsx"
import AddBeerPage from "./pages/AddBeerPage.jsx"
import BeerDetailsPage from "./pages/BeerDetailsPage.jsx"
import Navbar from "./components/Navbar"

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/beers" element={<AllBeersPage />} />
                <Route path="/random-beer" element={<RandomBeerPage />} />
                <Route path="/new-beer" element={<AddBeerPage />} />
                <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
            </Routes>
        </div>
    )
}

export default App

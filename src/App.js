import './App.css'
import { Route, Routes } from "react-router-dom"
import ListBeersPage from "./Pages/ListBeersPage/ListBeersPage"
import HomePage from "./Pages/HomePage/HomePage"
import RandomBeerPage from "./Pages/RandomBeerPage/RandomBeerPage"
import NewBeerPage from './Pages/NewBeerPage/NewBeerPage'
import SingleBeerPage from './Pages/SingleBeerPage/SingleBeerPage'

function App() {

  return (

    <main>
      <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/beers" element={<ListBeersPage />} />
      </Routes>
      <Routes>
        <Route path="/beers/:beer_id" element={<SingleBeerPage />} />
      </Routes>
      <Routes>
        <Route path="/random-beer" element={<RandomBeerPage />} />
      </Routes>
      <Routes>
        <Route path="/new-beer" element={<NewBeerPage />} />
      </Routes>
    </main>

  )
}

export default App;

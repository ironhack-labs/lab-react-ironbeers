import Main from "./components/Main"
import { Routes, Route } from "react-router-dom"
import Beers from "./components/pages/Beers"
import RandomBeer from "./components/pages/RandomBeer"
import NewBeer from "./components/pages/NewBeer"
import SingleBeer from "./components/pages/SingleBeer"

function App() {
  return (
    <div className="App">

     <Routes>
     <Route path="/" element={<Main />} />
      <Route path="/beers" element={<Beers />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer />} />
      <Route path="/beers/:beerId" element={<SingleBeer />} />

    </Routes>
    </div>
  )
}

export default App

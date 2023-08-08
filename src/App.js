import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import BeersPage from "./pages/BeersPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/beers" element={<BeersPage />} />
        <Route
          path="/beers/:beerId"
          element={<BeerDetailsPage isRandom={false} />}
        />

        <Route
          path="/random-beer"
          element={<BeerDetailsPage isRandom={true} />}
        />
        <Route path="/new-beer" element={""} />
      </Routes>
    </div>
  )
}

export default App
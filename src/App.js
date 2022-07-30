import { Route, Routes } from 'react-router-dom'
import Beers from './components/Beers'
import HomePage from './components/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<HomePage />} />
        <Route path="/new-beer" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App

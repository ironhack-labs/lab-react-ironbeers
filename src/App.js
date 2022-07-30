import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<HomePage />} />
        <Route path="/random-beer" element={<HomePage />} />
        <Route path="/new-beer" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App

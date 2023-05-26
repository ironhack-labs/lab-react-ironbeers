import './App.css'
import AppRoutes from './components/AppRoutes/AppRoutes'
import { useLocation } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {

  const location = useLocation()

  return (
    <div className="App">
      {location.pathname !== '/' && <Header />}
      <header className="App-header">
        <AppRoutes />
      </header>
    </div>
  )
}

export default App
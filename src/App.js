import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Header from './components/Header/Header'
import Index from './components/Index/Index'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div>

      <Link to='/'>
        <Header />
      </Link>
      <AppRoutes />

    </div>
  )
}

export default App

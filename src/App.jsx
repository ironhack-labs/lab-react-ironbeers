import { useLocation } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import AppRoutes from './routes/AppRoutes';

function App() {

  const { pathname } = useLocation()

  return (
    <div className="App">
      {
        pathname === '/' ? undefined : <NavBar />
      }
      <AppRoutes />
    </div>
  )
}

export default App;

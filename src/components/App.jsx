import AppRoutes from '../routes/AppRoutes'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBar from './NavBar/NavBar'
import { useLocation } from 'react-router-dom'

function App() {

  const { pathname } = useLocation()

  return (
    <div className="App">
      {
        pathname === "/" ? undefined : <NavBar />
      }
      <AppRoutes />
    </div>
  );
}

export default App;

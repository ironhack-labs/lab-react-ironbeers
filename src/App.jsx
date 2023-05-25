import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar';
import AppRoutes from './routes/AppRoutes';

function App() {



  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  )
}

export default App;
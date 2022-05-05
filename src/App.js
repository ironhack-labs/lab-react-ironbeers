import './App.css';
import NavBar from './components/NavBar/NavBar';
import AppRoutes from './routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <NavBar />

      <AppRoutes />

    </div>
  );
}

export default App;

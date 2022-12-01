import './App.css';
import Navigation from './components/NavBar/Navbar';
import AppRoutes from './routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Navigation />
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;

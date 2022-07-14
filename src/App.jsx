import './App.css'
import NavBar from './components/Navbar/Navbar'
import AppRoutes from './routes/appRoutes'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">

      <NavBar />

      <AppRoutes />

    </div>
  );
}
export default App

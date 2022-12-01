import './App.css';
import AppRoutes from './routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';





function App() {
  
  return <div className="App">

    <Navbar/>
    <AppRoutes/>
   </div>
  
}
export default App;
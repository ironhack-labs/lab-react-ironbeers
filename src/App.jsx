import './App.css';
import MyNavbar from './components/NavBar/NavBar';
import AppRoutes from './routes/App.routes';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <AppRoutes />
    </div>
  );
}

export default App;

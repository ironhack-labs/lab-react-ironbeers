import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './App.css';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header/Header'


function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />

    </div>
  );
}

export default App;

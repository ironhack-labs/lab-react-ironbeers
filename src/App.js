import './App.css';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes'
import {useLocation} from 'react-router-dom'

function App() {

const location = useLocation()
const notHome = location.pathname !== '/'

  return (
    <div className="App">
      {notHome && <Header />}
      <AppRoutes/>
    </div>
  );
}

export default App;

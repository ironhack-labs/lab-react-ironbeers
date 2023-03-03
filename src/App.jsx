import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header/Header';

import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App

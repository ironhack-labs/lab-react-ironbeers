import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import AppRoutes from './routes/AppRoutes'


function App() {
  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
    </div>
  );
}

export default App;


import './App.css'
import Navbar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'


function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App

import { Container } from 'react-bootstrap'
import AppRoutes from '../routes/AppRoutes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <Container>

        <AppRoutes />

      </Container>
    </div>
  )
}

export default App

import { Container } from 'react-bootstrap';
import './App.css';
import AppRoutes from './Routes/AppRoutes';




function App() {
  return (
    <Container fluid={true}>
      <AppRoutes />
    </Container>
  );
}

export default App;

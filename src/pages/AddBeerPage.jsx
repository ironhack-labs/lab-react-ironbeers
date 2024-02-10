import { useNavigate } from "react-router-dom";
import BeerForm from "../components/BeerForm";
import { createBeer } from "../services/beerService";
import Navbar from "../components/Navbar";

const NewBeer = () => {
    const navigate = useNavigate();
    
    const onSubmit = (values, formikBag) => {
        const { setSubmitting } = formikBag;
    
        createBeer(values)
          .then(response => {
            if (response && response.data) {
              navigate('/beers');
            } else {
              console.error("La respuesta de la API no contiene datos válidos:", response);
            }
          })
          .catch(error => {
            console.error("Error al crear la cerveza:", error);
          })
          .finally(() => {
            setSubmitting(false); // Restablece setSubmitting después de que se complete la solicitud
          });
    };
    
  
    return (
      <>
        <Navbar />
        <div>
          <h1>Crear cerveza</h1>
          <BeerForm onSubmit={onSubmit} />
        </div>
      </>
    );
  }

  export default NewBeer;
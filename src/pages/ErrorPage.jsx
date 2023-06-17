import { Link } from 'react-router-dom'
function ErrorPage(){
    return(<>
        <h1>¿Qué haces aquí? Este sitio no existe, 
            es una ilusión óptica
        </h1>
        <Link to="/">Volver a casa</Link>
    </>)
}

export default ErrorPage
import React,{Component} from 'react'
import axios from 'axios'
import Header from '../Header/Header';
class Beer extends Component {

    // Guardar los datos de la API para que podamos verlos en la vista.
    state = {
        beers: []
    }


    // Llamados a API. O cualquier cosa después de que la página ya cargo.
    componentDidMount (){
        axios.get('https://ih-beer-api.herokuapp.com/beers')
            .then(response => {
                const beers =response.data.slice(0,40);
                this.setState({ beers })
                console.log(beers)
            })
            .catch(error=>{console.log(error)})
        //Axios nos sirve para un CRUD de datos. Es una promesa.
    }//componente o metodos de ciclo de vida, se llaman cuando se crea una instancia del componente y se inserta en el DOM

    render(){
        const { beers } = this.state
        return(
            <div>
                <Header/>
                <ul className="BeerCard">
                    {beers.map((beers, id) => <li key={id}>
                        <div className="lista_Cont">
                            <img className="BeersImg" src={beers.image_url} alt={beers.name} />
                            <div className="Beer_Container">
                                <h3>{beers.name}</h3>
                                <h4>{beers.tagline}</h4>
                                <strong><small>{beers.name}</small></strong>
                            </div>
                        </div>
                        <hr/>
                    </li>)}
                </ul>
                <ul>

                </ul>
            </div>
   
        )
    }
}
export default Beer

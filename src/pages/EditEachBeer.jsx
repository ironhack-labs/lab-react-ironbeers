import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function EditEachBeer() {

    const [beerData, setBeerData] = useState({
        name: '',
        tagline: '',
        description: '',
        ImageUrl: '',
        FirstBrewed: '',
        BrewersTips: '',
        AttenuationLevel: 0,
        ContributedBy: '',
    })

    useEffect(() => {
        loadFormData()          // 1.- Primero se rellena el form con los datos a editar
    }, [])

    const { beerId } = useParams()

    const navigate = useNavigate()

    const loadFormData = () => {
        axios
            .get(`${API_URL}/beers/${beerId}`)
            .then(({ data }) => setBeerData(data))    // 2.- Pre-rellenamos el estado (y con él, el formulario)
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { name, value } = e.target
        setBeerData({ ...beerData, [name]: value })
    }

    const handleFormSubmit = e => {         // 3.- En el envío se mandan los datos a editar con .put()

        e.preventDefault()

        alert("Beer added successfully!");
        navigate('/')

    }


    return (
        <>
            <div className="d-inline-flex flex-column w-100 p-4">
                <form onSubmit={handleFormSubmit}>
                    <label>Name</label>
                    <input
                        className="form-control mb-4"
                        type="text"
                        name="name"
                        placeholder="Beer Name"
                        value={beerData.name}
                        onChange={handleInputChange}
                    />
                    <label>Tagline</label>
                    <input
                        className="form-control mb-4"
                        type="text"
                        name="tagline"
                        placeholder="Beer Tagline"
                        value={beerData.tagline}
                        onChange={handleInputChange}
                    />

                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control mb-4"
                        type="text"
                        name="description"
                        placeholder="Description"
                        rows="3"
                        value={beerData.description}
                        onChange={handleInputChange}
                    ></textarea>

                    <label>Image</label>
                    <input
                        className="form-control mb-4"
                        type="text"
                        name="imageUrl"
                        placeholder="Image URL"
                        value={beerData.imageUrl}
                        onChange={handleInputChange}
                    />

                    <label>First Brewed</label>
                    <input
                        className="form-control mb-4"
                        type="text"
                        name="firstBrewed"
                        placeholder="Date - MM/YYYY"
                        value={beerData.firstBrewed}
                        onChange={handleInputChange}
                    />

                    <label>Brewer Tips</label>
                    <input
                        className="form-control mb-4"
                        type="text"
                        name="brewersTips"
                        placeholder="..."
                        value={beerData.brewersTips}
                        onChange={handleInputChange}
                    />

                    <label>Attenuation Level</label>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                %
                            </span>
                        </div>
                        <input
                            className="form-control mb-4"
                            type="number"
                            name="attenuationLevel"
                            value={beerData.attenuationLevel}
                            onChange={handleInputChange}
                            min={0}
                            max={100}
                        />
                    </div>

                    <label>Contributed By</label>
                    <input
                        className="form-control mb-4"
                        type="text"
                        name="contributedBy"
                        placeholder="Contributed by"
                        value={beerData.contributedBy}
                        onChange={handleInputChange}
                    />
                    <button className="btn btn-primary btn-round">Add Beer</button>
                </form>


            </div>

            <hr />



        </>
    );
}



export default EditEachBeer;
// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function NewBeer() {

//    const [title, setTitle] = useState("");
//     const [pricePerDay, setPricePerDay] = useState("");
//     const [image, setImage] =("")

//     const navigate = useNavigate()

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const apartmentDetails = {
//             title: title,
//             pricePerDay: pricePerDay,
//             img: image
//         }

//         axios.post("https://ironbnb-m3.herokuapp.com/apartments", apartmentDetails)
//             .then(response => {
//                 navigate(`/apartments/${response.data._id}`);
//             })
//             .catch(e => {
//                 console.log("error creating apartment...", e)
//             });
//     }

//     const onChangeTitle = (e) => {
//         setTitle(e.target.value);
//     }

//     const onChangePrice = (e) => {
//         setPricePerDay(e.target.value);
//     }

    return (
    <>
        <header><a href="/">Home</a></header>
        <h1>New Beer</h1>
    </>
    //     <div className="CreateApartment">
    //         <form onSubmit={handleSubmit}>
    //             <label>
    //                 Title
    //                 <input
    //                     type="text"
    //                     name="title"
    //                     value={title}
    //                     onChange={onChangeTitle}
    //                 />
    //             </label>

    //             <label>
    //                 Price per Day
    //                 <input
    //                     type="number"
    //                     min={0}
    //                     name="pricePerDay"
    //                     value={pricePerDay}
    //                     onChange={onChangePrice}
    //                 />
    //             </label>

    //             <label>
    //                 image
    //                 <input
    //                 type="text"
    //                 name="image"
    //                 value={image}
    //                 />
    //             </label>

    //             <button type="submit">Create Apartment</button>

    //         </form>
    //     </div>
    )
}

export default NewBeer;
import axios from 'axios';
import { useState } from 'react';

function NewBeer() {

    const [beersArr, setBeersArr] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: "",
    });


return (
    <p>Add new beer in the form</p>
)
}

export default NewBeer;
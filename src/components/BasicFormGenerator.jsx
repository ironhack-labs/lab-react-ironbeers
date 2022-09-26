import { useNavigate } from "react-router-dom";
import axios from 'axios';

import FormLabelInputCreator from '../components/FormLabelInputCreator';

const BasicFormGenerator = ({formData}) => {
        
  const navigate = useNavigate()

    const handleSubmit = (e) => {
		e.preventDefault();
        axios.post(`${formData.API_URL}`,formData.state)
              .then(response => {
                navigate(formData.redirectURL)
                ;})
              .catch(err => console.log(err))

	};
    return (
        <div className='createForm'>
            <img src={formData.imgSrc} alt='altImg'/>
            <h3>{formData.title}</h3>
            <form onSubmit={handleSubmit} className='formNewBeer'>
                <FormLabelInputCreator formData={formData}/>
                <button type='submit'>{formData.buttonText}</button>
            </form>
		</div>
    )
}

export default BasicFormGenerator
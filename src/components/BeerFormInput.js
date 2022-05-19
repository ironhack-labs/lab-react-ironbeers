import { Input } from "./styled/BeerForm.styled";

const BeerFormInput = ({ label, type, value, handleChange }) => (
    <Input>
        <label htmlFor={label}><strong>{label}</strong></label>
        {type !== "textarea" ?
            <input id={label} type={type} value={value} onChange={handleChange} /> :
            <textarea id={label} value={value} onChange={handleChange}></textarea>
        }
    </Input>
);

export default BeerFormInput;
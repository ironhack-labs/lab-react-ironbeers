import { InputContent, Input, InvalidMsg } from "./styled/BeerForm.styled";

const BeerFormInput = ({ input }) => (
    <InputContent>
        <label htmlFor={input.label}>{input.label}</label>
        {(input.label !== "Description") ? (
                <Input
                    id={input.label}
                    type={input.type}
                    min={input.min}
                    max={input.max}
                    placeholder={input.placeholder}
                    value={input.value}
                    onChange={input.handleChange}
                    required
                    pattern={input.pattern}
                    onInvalid={e => {input.handleInvalid(e, input.invalidMsg)}}
                    onInput={e => {e.target.setCustomValidity("")}}
                />
            ) : (
                <textarea
                    id={input.label}
                    rows="10"
                    placeholder={input.placeholder}
                    value={input.value}
                    onChange={input.handleChange}
                    required
                    onInvalid={e => {input.handleInvalid(e)}}
                    onInput={e => {e.target.setCustomValidity("")}}
                ></textarea>
            )
        }
        {input.invalidInput && <InvalidMsg>{input.invalidMsg}</InvalidMsg>}
    </InputContent>
);

export default BeerFormInput;
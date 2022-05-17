import { StyledError, Status } from "./styled/Error.styled";

const Error = ({ status, statusText }) => (
    <StyledError>
        <Status>{status}</Status>
        <p>{statusText}</p>
    </StyledError>
);

export default Error;
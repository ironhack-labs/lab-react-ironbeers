import { CircularProgress } from "@mui/material";
import { Background } from "./styled/Loading.styled";

const Loading = () => (
    <Background>
        <CircularProgress size="5rem" />
    </Background>
);

export default Loading;
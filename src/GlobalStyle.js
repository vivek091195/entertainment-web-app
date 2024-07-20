import { createGlobalStyle } from "styled-components";
import { COLORS } from "./styles";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    },
    html, body, #root {
        height: 100%;
        width: 100%;
        background-color: ${COLORS.BLUE.shade1};
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;

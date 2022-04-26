import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --white: #ffffff;
        --black: #06060A;
        --light: #f5f5f5;
        --softBlack: #151521;
        --orange: #FF360A;
        --poppins:'Poppins', sans-serif;
        --audioWide:'Audiowide', cursive;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(--softBlack);
        font-size: 1rem;
        color: var(--light);
        font-family:var(--poppins);
    }
    button{
        cursor: pointer;
    }
`;

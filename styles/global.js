import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --white: #ffffff;
        --black: #06060A;
        --light: #f5f5f5;
        --softBlack: #151521;
        --cleanBlack:#232323;
        --grey:#505050;
        --lowGrey:#888888;
        --orange: #FF360A;
        --lowOrange:#FF5C00;
        --poppins:'Poppins', sans-serif;
        --audioWide:'Audiowide', cursive;
        --blackOps: 'Black Ops One', cursive;
    }

    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-track {
        background: var(--black);
    }
    ::-webkit-scrollbar-thumb {
        background: var(--grey); 
        border-radius: 10px;
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
    a{
        text-decoration: none;
    }
    figcaption{
        display: none;
    }
    .toast--global{
        border: 2px solid var(--orange);
        background: var(--softBlack);
        color: var(--light);
        padding: 10px; 
        z-index: 99999;
        font-family:var(--audioWide);
        @media screen and (min-width:768px){
            font-size:20px;
        }
    }
`;

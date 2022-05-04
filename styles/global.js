import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --white: #FFFFFF;
        --black: ${(props)=>props.theme=="dark"? "#06060A" : "#F5F5F5"};
        --light: ${(props)=>props.theme=="dark"? "#F5F5F5": "#232323"};
        --softBlack:${(props)=>props.theme=="dark"? "#151521": "#D0CECE"};
        --cleanBlack:${(props)=>props.theme=="dark"? "#232323": "#5B5B5B"};
        --grey:${(props)=>props.theme=="dark"? "#505050": "#888888"};
        --lowGrey:${(props)=>props.theme=="dark"? "#888888":"#505050"};
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

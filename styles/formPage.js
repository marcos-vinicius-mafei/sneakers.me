import styled from "styled-components"


export const FormPage = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    min-height: calc(100vh - 160px);
    padding: 30px;
    h2{
        text-transform: uppercase;
        font-family: var(--poppins);
        font-size:24px;
        a{
            color: var(--orange);
        }
        @media screen and (min-width: 650px){
            font-size: 30px;
        }
        @media screen and (min-width: 768px){
            font-size: 35px;
        }
    }
    p.account{
        margin-top:5px;
        font-size: 15px;
        align-self: flex-start;
        a{
            color: var(--orange);
        }
    }
`
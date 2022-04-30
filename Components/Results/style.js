import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top:30px;
    margin-bottom: 50px;
    gap: 20px;
    min-height: calc(100vh - 230px);
    h2{
        font-size:28px;
        font-weight: 500;
        font-family: var(--audioWide);
        a{
            color: var(--orange)
        }
    }
    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    @media screen and (min-width:768px){
        padding-top:50px;
        gap: 50px;
        h2{
            font-size:35px;
        }
        ul{
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 50px;
        }
    }
    @media screen and (min-width:1000px){
        h2{
            font-size: 40px;
        }
    }
`
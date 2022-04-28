import styled from "styled-components"


export const SneakerPage = styled.div`
    min-height: calc(100vh - 160px);
    margin-top:80px;
    margin-bottom:50px;
    @media screen and (min-width:900px){
        margin-bottom:0;
    }
`


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh -160px);
    justify-content: center;
    gap: 30px;
    .image--container{
        background-color: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 300px;
        width: 100%;
        overflow: hidden;
    }
    .product--infos{
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-left: 20px;
        padding-right: 20px;
        h1{
            font-weight: 500;
            font-family: var(--audioWide);
            font-size: 30px;
        }
        h1.description{
            color: var(--lowOrange);
        }
        p{
            color: var(--lowGrey);
        }
        a{
            color: var(--orange);
        }
        .cart{
            display: flex;
            align-items: center;
            gap: 10px;
            button{
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--light);
                font-family: var(--poppins);
                font-size: 15px;
                border: 0;
                background-color: var(--orange);
                width: 120px;
                height: 40px;
            }
        }
    }
    @media screen and (min-width:900px){
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        .product--infos{
            width: 50%;
        }
        .image--container{
            width: 50%;
            height: calc(100vh - 160px);
        }
    }
`
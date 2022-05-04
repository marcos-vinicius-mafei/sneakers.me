import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 300px;
    border: 2px solid var(--orange);
    border-radius:10px;
    padding-top: 10px;
    a{
        color: var(--orange);
    }
    h1{
        font-weight: 500;
        font-family: var(--audioWide);
        color: var(--orange);
        align-self: center;
    }
    .checkout--infos{
        padding-left: 15px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        h3{
            font-size: 15px;
        }
        border-bottom: 1.5px solid var(--grey);
    }
    .checkout--final{
        display: flex;
        flex-direction: column;
        gap: 10px;
        h2{
            margin-left: 15px;
        }
        button{
            border: 0;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            background-color: var(--orange);
            height:30px;
            font-size: 18px;
            font-family: var(--poppins);
            text-transform: uppercase;
            font-weight: bold;
            color: var(--softBlack);
            &:hover{
                color: var(--light);
            }
        }
    }
    @media screen and (min-width: 768px) {
        margin-top: 75px;
    }
    @media screen and (min-width: 1000px) {
        margin-top: 83px;
        width: 400px;
        gap: 20px;
        .checkout--infos{
            gap: 20px;
            padding-bottom: 20px;
            h3{
                font-size: 18px;
            }
        }
        .checkout--final{
            gap: 15px;
            button{
                height: 40px;
                font-size: 24px;
            }
        }
    }
`
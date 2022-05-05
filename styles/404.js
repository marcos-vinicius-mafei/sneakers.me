import styled from "styled-components"

export const Container = styled.div`
    .view{
        margin-top: 100px;
        width: 100%;
        height: calc(100vh - 180px);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        h3{
            font-size: 30px;
            font-family: var(--audioWide);
            font-weight: 500;
        }
        h1.message{
            font-family: var(--audioWide);
            font-size:50px;
            color: var(--orange);
            position: absolute;
        }
        @media screen and (min-width:768px){
            h3{
                font-size: 40px;
            }
            h1.message{
                font-size: 60px;
            }
        }
        @media screen and (min-width:1000px){
            h3{
                font-size: 45px;
            }
            h1.message{
                font-size: 70px;
            }
        }
    }
`
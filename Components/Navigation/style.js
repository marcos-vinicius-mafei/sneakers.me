import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled(motion.div)`
    position: absolute;
    right: 0;
    margin-top: 100px;
    height: calc(100vh - 100px);
    width: 100vw;
    background-color:var(--black);
    z-index:-1;
    display: flex;
    justify-content: center;
    padding-top: 80px;
    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 30px;
        li{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 200px;
            font-size:24px;
            &:hover:not(:last-child){
                color: var(--orange);
                cursor: pointer;
            }
            .icons{
                color: var(--orange);
            }
        }
    }
    @media screen and (min-width:600px){
        ul{
            li{
                font-size: 35px;
                width: 400px;
            }
        }
    }
    @media screen and (min-width: 768px) {
        width: 50vw;
        ul{
            li{
                width: 300px;
            }
        }
    }
    @media screen and (min-width:1000px){
        padding-top: 0;
        align-items:center;
        nav{
            height: 100%;
        }
        ul{
            height: 90%;
            justify-content: space-around;
            li{
                width: 400px;
            }
        }
    }
    @media screen and (min-width:1200px){
        ul{
            li{
                font-size: 40px;
            }
        }
    }
`
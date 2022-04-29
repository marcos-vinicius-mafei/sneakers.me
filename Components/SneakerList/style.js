import styled from "styled-components"
import {motion} from "framer-motion"


export const Container = styled(motion.div)`
    width: 100%;
    overflow: hidden;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    @media screen and (min-width:768px){
        padding-left: 50px;
        padding-right: 50px;
    }
    @media screen and (min-width:1000px){
        padding-left: 100px;
        padding-right: 100px;
    }
`

export const List = styled(motion.ul)`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;
    @media screen and (min-width:768px){
        gap: 50px;
    }
`
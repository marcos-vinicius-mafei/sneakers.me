import styled from "styled-components"


export const Container = styled.div`
    position:relative;
    width: 80px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: #2228;
    border: 1px solid grey;
    border-radius: 80px;
    cursor: pointer;
    .theme-icons{
        width: 20px;
        height: 20px;
    }
    .sun{
        color: yellow;
    }
    .moon{
        color: yellow;
    }
    .circle{
        position: absolute;
        background-color: var(--light);
        top: 50%;
        margin-top: -15px;
        transition: left 0.3s;
        left: ${(props)=>props.theme == "dark"?"5px":"45px"};
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
`
import styled from "styled-components"

export const FancyButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 260px;
    height: 40px;
    border-radius:8px;
    border: 0;
    background-color: ${(props)=>props.background};
    color: ${(props)=>props.color};
    font-family: var(--audioWide);
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
`
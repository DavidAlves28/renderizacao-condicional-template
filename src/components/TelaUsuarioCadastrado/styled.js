import styled from "styled-components";

export const Div = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Titulo = styled.h1`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: #ff4400;
`
export const BackToLoginButton = styled.button`
    background-color: white;
    border-radius: 8px;
    cursor: pointer;
    width: 200px;
    padding: 10px;
    :hover{
        background-color: black;
        color: white;
    }
`
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font: 400 1rem "Roboto", sans-serif;
        color: ${props=>props.theme['slate-100']};
        background-color: ${props=>props.theme['slate-950']};
        background-size: cover;
        height: auto;
        -webkit-font-smoothing: antialiased;  
    }
`;
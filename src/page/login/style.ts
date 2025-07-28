import styled from "styled-components";
import background from "../../assets/images/background.jpg"
export const ContainerGeneral = styled.main`
    background-image:url(${background});
    background-position: center;
    height: 100vh;
    background-size: cover;
    `;
export const ContainerLogin = styled.div`
    background-color: ${props=>props.theme['slate-950']};
    height: 100vh;
    width: 450px;
    border-right: 1px solid ${props=>props.theme['slate-600']};
    display: flex;
    flex-direction: column;
    gap: 5rem;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    span{
        display: flex;
        align-items: center;
        gap:1rem;
        font-size: 2rem;
        font-weight: 200;
    }
    @media screen and (max-width:780px){
        width: 100%;
        background-color: transparent;
    }
`;
export const ContainerLoginDisplay = styled.div`
    display: grid;
    gap: 1rem;
    height: fit-content;
    div{
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: space-around;
    }
`;
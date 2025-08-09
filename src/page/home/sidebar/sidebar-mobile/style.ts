import styled from "styled-components";

export const ContainerGeneralSidebarMobile = styled.div`
    position: sticky;
    top: 2rem;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid: 1;
    gap: 1rem;
    div{
        display: grid;
        gap: 0.5rem;
    }
    span{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 300;
        font-size: larger;
    }
    @media only screen and (max-width: 1920px){
        display: none;
    }
    @media only screen and (max-width: 720px){
        display: flex;
        width: 20px;
    }
`;
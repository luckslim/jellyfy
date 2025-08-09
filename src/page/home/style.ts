import styled from "styled-components";

export const ContainerGeneralHome = styled.main`
    display: flex;
    gap: 1rem;
    align-items: start;
    justify-content: center;
    margin: 2rem 2rem;
    @media only screen and (max-width: 720px) {
        display: flex;
        gap: 1.5rem;
        justify-content: space-between;
    }
`;
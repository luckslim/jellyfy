import styled from "styled-components";

export const ContainerGeneralSidebar = styled.div`
    display: grid;
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
`;
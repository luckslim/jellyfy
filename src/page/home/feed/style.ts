import styled from "styled-components";

export const ContainerGeneralFeed = styled.main`
    display: grid;
    grid: 1;
    height: fit-content;
    gap: 2rem;
    padding: 0 2rem;
    border-left: 1px solid ${props => props.theme['slate-600']};
    border-right: 1px solid ${props => props.theme['slate-600']};

`;
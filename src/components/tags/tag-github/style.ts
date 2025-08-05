import styled from "styled-components";

export const ContainerTagGithub = styled.a`
    width: fit-content;
    padding: 5px;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background-color: ${props=>props.theme['blue-500']};
    border-radius: 8px;
    cursor: pointer;
`;
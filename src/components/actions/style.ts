import styled from "styled-components";

export const ContainerGeneralActions = styled.div`
    display: flex;
    gap: 1rem;
    cursor: pointer;
`;
export const StyleIcon = styled.div`
    display: flex;
    border-radius: 999px;
    padding: 5px;
    &:hover{
        background-color: ${props=>props.theme['blue-500']};
    }
`
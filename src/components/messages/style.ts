import styled from "styled-components";

export const ContainerGeneralMessage = styled.button`
    padding: 0.4rem;
    border: none;
    border-radius: 4px;
    background-color: ${props=>props.theme['slate-900']};
    color: ${props=>props.theme['slate-50']};
    font-weight: 600;
`;
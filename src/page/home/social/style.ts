import styled from "styled-components";

export const ContainerGeneralSocial =styled.div`
    border: 1px solid ${props=>props.theme['slate-600']};
    border-radius: 8px;
    display: grid;
    gap: 1rem;
    padding: 1rem;
    div{
        display: flex;
        align-items: center;
        height: fit-content;
        border-bottom: 1px solid ${props=>props.theme['slate-600']};

    }
`;
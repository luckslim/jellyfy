import { XIcon } from "@phosphor-icons/react";
import styled from "styled-components";

export const ContainerGeneralCardChat = styled.div`
    position: fixed;
    left: 1rem;
    bottom: 1rem;
    border: 1px solid ${props=>props.theme['slate-700']};
    border-radius: 8px;
    background-color: ${props=>props.theme['slate-950']};
    width: 400px;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: fit-content;

`;
export const ContainerHeaderCardChat = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    height: fit-content;
    background-color: ${props=>props.theme['slate-900']};
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
`;
export const StyleXIcon = styled(XIcon)`
    margin-right: 1rem;
    border: 1px solid ${props=>props.theme['slate-700']};
    border-radius: 4px;
    cursor: pointer;
    &:hover{
        opacity: 50%;
    }
`;
export const ContainerBodyCardChat = styled.div`
    padding: 1rem;
    height: fit-content;
`;
export const ContainerDisplayChat = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
`;
export const ContainerBodyMessages =styled.div`
    height: 300px;
`;
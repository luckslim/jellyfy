import styled from "styled-components";

export const ContainerGeneralProfilerChat = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    gap:1rem;
    cursor: pointer;
    img{
        width: 40px;
        height: 40px;
        border-radius: 999px;
        border: 1px solid ${props=>props.theme['pink-500']};
    }
    div{
        small{
            color: ${props=>props.theme['slate-600']};
        }
    }
    &:hover{
        background-color: ${props=>props.theme['slate-900']};
    }
`;
import styled from "styled-components";

export const ContainerGeneralInviteFriends =styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    margin-right: 1px;
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
    span{
        display: flex;
        gap: 1px;
        background-color: ${props=>props.theme['slate-950']};
        button{
            display: flex;
            background-color: ${props=>props.theme['slate-50']};
            border: none;
            cursor: pointer;
        }
    }
    &:hover{
        background-color: ${props=>props.theme['slate-900']};
    }
`;
export const StyleSpan = styled.div``;
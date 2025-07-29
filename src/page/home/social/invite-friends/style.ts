import styled from "styled-components"

export const ContainerGeneralInviteFriends = styled.div`
    display: grid;
    grid:1;
    text-align: center;
    border: 1px solid ${props=>props.theme['slate-600']};
    border-radius: 8px;
    span{
        background-color: ${props=>props.theme['slate-50']};
        padding: 1rem;
        color: ${props=>props.theme['slate-950']};
        font-weight: 500;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        cursor: pointer;
    }
    div{
        max-height: 300px;
        overflow-y: scroll;
        &::-webkit-scrollbar{
        border-radius: 4px;
        width: 5px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: ${props=>props.theme['slate-50']};
            border-radius: 4px;
        }

    }

`;

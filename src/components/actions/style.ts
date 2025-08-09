import styled from "styled-components";

export const ContainerGeneralActions = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    @media only screen and (max-width: 720px) {
        width: 200px;
        padding-bottom: 10px;
        overflow-x: scroll;
        &::-webkit-scrollbar{
        border-radius: 4px;
        width: 5px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: ${props => props.theme['slate-50']};
            border-radius: 4px;
        }
    }
`;
export const StyleIcon = styled.div`
    display: flex;
    align-items: center;
    border-radius: 999px;
    padding: 5px;
    &:hover{
        background-color: ${props=>props.theme['blue-500']};
    }
`
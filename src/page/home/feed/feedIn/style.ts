import styled from "styled-components";

export const ContainerGeneralFeedIn = styled.div`
    display: grid;
    gap: 1rem;
    width: 600px;
    padding-bottom: 1rem;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
export const StyleImage = styled.img`
    width: 600px;
    border-radius: 8px;
`;
export const ContainerGeneralComments = styled.span`
    display: grid;
    justify-content: center;
    grid: 1;
    gap: 0.3rem;
    padding-right: 1rem;
    max-height: 360px;
    overflow-y: scroll;
    &::-webkit-scrollbar{
    border-radius: 4px;
    width: 5px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme['slate-50']};
        border-radius: 4px;
    }
`;
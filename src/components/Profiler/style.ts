import styled from "styled-components";

export const ContainerGeneralProfiler = styled.main`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    height: fit-content;
    background-color: ${props=>props.theme['slate-900']};
    padding: 1rem;
    border-radius: 4px;
    img{
        width: 50px;
        border-radius: 8px;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.475rem;
        height: fit-content;

        small{
            color: ${props => props.theme['slate-500']};
        }
    }
`;
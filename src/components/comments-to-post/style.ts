import styled from "styled-components";

export const ContainerGeneralCommentsToPost = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${props => props.theme['slate-800']};
    border: 1px solid ${props => props.theme['slate-800']};
    border-radius: 4px;
    padding: 1rem;
    width: 500px;
    span{
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 40px;
            height: 40px;
            border-radius: 999px;
            border: 1px solid ${props=>props.theme['pink-500']};
        }
        p{
            color: ${props => props.theme['slate-100']};
            font-size: 0.8rem;
            
        }
        small{
            color: ${props=>props.theme['slate-400']};
        }

    }
    p{
        padding-left:1rem;
    }

`;
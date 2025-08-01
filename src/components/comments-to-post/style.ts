import styled from "styled-components";

export const ContainerGeneralCommentsToPost = styled.div`
    display: grid;
    padding: 1rem;
    gap: 1rem;
    border-top: 1px solid ${props=>props.theme['slate-600']};
    div{
        display: flex;
        gap: 1rem;
        align-items: center;
        img{
            width: 40px;
            height: 40px;
            border-radius: 999px;
            border: 1px solid ${props=>props.theme['pink-500']};
        }
        span{
            display: flex;
            gap: 5px;
            align-items: center;
            small{
                color: ${props=>props.theme['slate-600']};
            }
        }
    }
    p{
        width: 600px;
        color: ${props=>props.theme['slate-400']};
        font-size: 14px;
    }
`;
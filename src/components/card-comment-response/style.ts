import styled from "styled-components";

export const ContainerGeneralCardCommentResp = styled.div`
    position: relative;
    display: flex;
    margin-bottom: -90px;
    top: -7rem;
    left: 1rem;
    gap: 1rem;
    background-color: ${props=>props.theme['slate-900']};
    border-radius: 8px;
    padding: 1rem;
    width: 90%;
    img{
        width: 40px;
        height: 40px;
        border-radius: 999px;
        border: 1px solid ${props=>props.theme['pink-500']};
    }
`;
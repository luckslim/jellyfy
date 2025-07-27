import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0.675rem;
    background-color: ${props=>props.theme['slate-50']};
    color: ${props=>props.theme['slate-950']};
    font-weight: 500;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    img{
        width: 30px;
    }
`;
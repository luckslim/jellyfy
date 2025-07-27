import styled from "styled-components";

export const StyleInput = styled.input`
    background-color: ${props=>props.theme['slate-950']};
    border-radius: 4px;
    padding: 0.675rem;
    font-size: 1rem;
    border: 1px solid ${props=>props.theme['slate-600']};
    color: ${props=>props.theme['slate-300']};
    &:focus{
        outline: none;
        border:1px solid ${props=>props.theme['slate-50']};
        box-shadow: 0 0 0 3px ${props => props.theme['slate-600']};
    }
    &::placeholder{
        color: ${props=>props.theme['slate-300']};
    }
`;
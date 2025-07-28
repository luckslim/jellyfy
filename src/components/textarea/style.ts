import styled from "styled-components";

export const StyleTextArea = styled.textarea`
    background-color: ${props=>props.theme['slate-950']};
    color: ${props=>props.theme['slate-300']};
    padding: 1rem;
    border-radius: 4px;
    max-width: 500px;
    min-width: 400px;
    max-height: 100px;
    min-height: 100px;
`;
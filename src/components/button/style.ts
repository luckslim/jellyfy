import styled from "styled-components";
export type ButtonTypeProps = "primary"|"secondary"
type Props = {
    type?: ButtonTypeProps;
}
export const StyledButton = styled.button<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    background-color: ${({theme,type})=>type==="primary" ? theme['slate-50'] : theme['slate-950']};
    color: ${({theme,type})=>type==="primary" ? theme['slate-900'] : theme['slate-300']};
    font-weight: 500;
    font-size: 1rem;
    border: ${({theme,type})=>type==="secondary" ? `1px solid ${theme['slate-700']}`: "none" };
    border-radius: ${({type})=>type==="secondary" ? "999px": "4px" };
    cursor: pointer;
    height:fit-content;
    &:hover{
        opacity:80%;
    }
    img{
        width: 30px;
    }
`;
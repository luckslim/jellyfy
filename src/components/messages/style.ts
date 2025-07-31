import styled from "styled-components";
export type ButtonProps = 'IdFriend' | 'IdMe'
type Props = {
    type?: ButtonProps;
}
export const ContainerGeneralMessage = styled.button<Props>`
    background-color: transparent;
    border: none;
    width: 100%;
    padding: 0.2rem 0;
    display: flex;
    justify-content: ${({ type }) => type == 'IdMe' ? 'end' : 'start'};
    span{
        display: flex;
        justify-content: center;
        max-width: 200px;   
        padding: 0.5rem;
        border: none;
        border-radius: 4px;
        background-color:  ${({ theme, type }) => type == 'IdMe' ? theme['slate-50'] : theme['slate-900']};
        color:${({ theme, type }) => type == 'IdMe' ? theme['slate-950'] : theme['slate-50']};
        font-weight: 600;
        p{
            text-align: start ;
            word-wrap: break-word;
            overflow-wrap: break-word;
            word-break: break-word;
        }
    }
`;
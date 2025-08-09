import styled from "styled-components";

export const ContainerGeneralComments = styled.div`
    display: grid;
    grid: 1;
    gap: 1rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${props=>props.theme['slate-600']};
    div{
        display: flex;
        gap: 1rem;
        align-items: start;
        img{
            width: 50px;
            height: 50px;
            border-radius: 9999px;
        }
        textarea{
            background-color: ${props=>props.theme['slate-950']};
            font-size: 1rem;
            padding: 1rem;
            color: ${props=>props.theme['slate-50']};
            border: none;
            max-width: 500px;
            min-width: 500px;
            max-height: 300px;
            min-height: auto;
            &:focus{
                outline: none;
            }
            @media only screen and (max-width:720px){
                            background-color: ${props=>props.theme['slate-950']};
            font-size: 1rem;
            padding: 1rem;
            color: ${props=>props.theme['slate-50']};
            border: none;
            max-width: 100%;
            min-width: 200px;
            max-height: 300px;
            min-height: auto;
            &:focus{
                outline: none;
            }
            }
        }
    }
    span{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: fit-content;
    }
`;
export const ContainerDisplayTagGithub = styled.form`
    display: flex;
    gap: 1rem;
    align-items: center;
    width: fit-content;
`;
export const StyleImagePost = styled.img`
    width: 300px;
    height: 300px;
    padding: 2px;
    background-color: ${props=>props.theme['blue-500']};
    border-radius: 8px;
`;
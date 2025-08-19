import styled from "styled-components";

export const ContainerGeneralExplorer = styled.div`
    display: grid;
    justify-content: center;
    gap: 1rem;
`;
export const ContainerExplorerHeader = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    height:fit-content;
`;
export const ContainerExplorerBody = styled.div`
    ul{
      list-style-type: none;
      display: grid;
      gap: 1rem;
      border: 1px solid ${props => props.theme['slate-600']};
      border-radius: 8px;
      padding: 1rem;
      li{
        border-radius: 999px;
        padding: 1px;
        color: ${props => props.theme['slate-300']};
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        small{
          display: flex;
          align-items: center;
          &::before{
            content:'';
            width: 100px;
            margin-right: 0.5rem;
            flex: 1;
            border-bottom:1px solid ${props=>props.theme['pink-500']};
          }
        }
      }
    }
`;
export const ContainerExplorerBodyNews = styled.div``;
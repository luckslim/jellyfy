import { StyledButton } from "./style";
type ButtonType = "button"|"submit"|"reset"
type Props = {
  name: string;
  type?: ButtonType ;
  urlImage?:string;
  onClick?:()=>void;
};
export function Button({ name, urlImage,type, onClick}: Props) {
  return (
    <>
      <StyledButton onClick={onClick} type={type}>
        {name}
        {urlImage && (<img src={urlImage} alt="" />)}
      </StyledButton>
    </>
  );
}

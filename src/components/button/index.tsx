import { StyledButton, type ButtonTypeProps, } from "./style";
type Props = {
  name: string;
  type?: ButtonTypeProps ;
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

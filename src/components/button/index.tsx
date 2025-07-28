import { StyledButton } from "./style";
type ButtonType = "button"|"submit"|"reset"
type Props = {
  name: string;
  type?: ButtonType ;
  urlImage?:string;
};
export function Button({ name, urlImage,type }: Props) {
  return (
    <>
      <StyledButton type={type}>
        {name}
        {urlImage && (<img src={urlImage} alt="" />)}
      </StyledButton>
    </>
  );
}

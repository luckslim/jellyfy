import { StyledButton } from "./style";

type Props = {
  name: string;
  urlImage?:string;
};
export function Button({ name, urlImage }: Props) {
  return (
    <>
      <StyledButton>
        {name}
        {urlImage && (<img src={urlImage} alt="" />)}
      </StyledButton>
    </>
  );
}

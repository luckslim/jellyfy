import { ContainerGeneralMessage, type ButtonProps } from "./style";
type Props = {
  text?: string;
  typeIdMessage?: ButtonProps;
};
export function Message({ text, typeIdMessage }: Props) {
  return (
    <>
      <ContainerGeneralMessage type={typeIdMessage}>
        <span>
          <p>{text}</p>
        </span>
      </ContainerGeneralMessage>
    </>
  );
}

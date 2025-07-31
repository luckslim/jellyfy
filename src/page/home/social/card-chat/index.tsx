import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { Message } from "../../../../components/messages";
import { Profiler } from "../../../../components/Profiler";
import {
  ContainerBodyCardChat,
  ContainerBodyMessages,
  ContainerDisplayChat,
  ContainerGeneralCardChat,
  ContainerHeaderCardChat,
  StyleXIcon,
} from "./style";
type Props = {
  onClick?: ()=> void
}
export function CardChat({onClick}:Props) {
  return (
    <>
      <ContainerGeneralCardChat>
        <ContainerHeaderCardChat>
          <Profiler />
          <StyleXIcon onClick={onClick} size={22} />
        </ContainerHeaderCardChat>
        <ContainerBodyCardChat>
          <ContainerBodyMessages>
            <Message typeIdMessage="IdFriend" text="hello world!" />
            <Message
              typeIdMessage="IdMe"
              text="hello dddddddddddddddddddddddddddddddddddddddddworld!"
            />
                        <Message
              typeIdMessage="IdMe"
              text="hello dddddddddddddddddddddddddddddddddddddddddworld!"
            />
                        <Message
              typeIdMessage="IdMe"
              text="hello dddddddddddddddddddddddddddddddddddddddddworld!"
            />
                        <Message
              typeIdMessage="IdMe"
              text="hello dddddddddddddddddddddddddddddddddddddddddworld!"
            />
            <Message typeIdMessage="IdFriend" text="hello world!" />
          </ContainerBodyMessages>
          <ContainerDisplayChat>
            <Input type="" placeholder="Sua Mensagem" />
            <Button type="secondary" name="enviar" />
          </ContainerDisplayChat>
        </ContainerBodyCardChat>
      </ContainerGeneralCardChat>
    </>
  );
}

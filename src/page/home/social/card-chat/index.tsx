import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { Message } from "../../../../components/messages";
import { Profiler } from "../../../../components/Profiler";
import { ContainerBodyCardChat, ContainerBodyMessages, ContainerDisplayChat, ContainerGeneralCardChat, ContainerHeaderCardChat, StyleXIcon } from "./style";

export function CardChat() {
    return (
        <>
            <ContainerGeneralCardChat>
                <ContainerHeaderCardChat>
                    <Profiler />
                    <StyleXIcon size={22} />
                </ContainerHeaderCardChat>
                <ContainerBodyCardChat>
                    <ContainerBodyMessages>
                        <Message typeIdMessage="IdFriend"  text="hello world!"/>
                        <Message typeIdMessage="IdMe"  text="hello dddddddddddddddddddddddddddddddddddddddddworld!"/>
                        <Message typeIdMessage="IdFriend"  text="hello world!"/>

                    </ContainerBodyMessages>
                    <ContainerDisplayChat>
                        <Input type="" placeholder="Sua Mensagem"/>
                        <Button type="secondary" name="enviar"/>
                    </ContainerDisplayChat>
                </ContainerBodyCardChat>
            </ContainerGeneralCardChat>
        </>
    )
}
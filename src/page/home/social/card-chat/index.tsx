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
                        <Message  text="hello world!"/>
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
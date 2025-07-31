import { Button } from "../button";
import { Input } from "../input";
import { ContainerGeneralCardCommentResp } from "./style";

export function CardCommentResp(){
    return(
        <>
            <ContainerGeneralCardCommentResp>
                <img src="https://avatars.githubusercontent.com/u/95627552?v=4" alt="" />
                <Input placeholder="" type=""/>
                <Button name="enviar" type="secondary"  />
            </ContainerGeneralCardCommentResp>
        </>
    )
}
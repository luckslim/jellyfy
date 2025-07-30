import { ContainerGeneralMessage } from "./style";
type Props = {
    text?: string;
    typeIdMessage?: string;
}
export function Message({text}:Props){
    return(
        <>
            <ContainerGeneralMessage>
                {text}
            </ContainerGeneralMessage>
        </>
    )
}
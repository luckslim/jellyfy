import { ChatCircleDotsIcon } from "@phosphor-icons/react";
import { ContainerGeneralProfilerChat } from "./style";
type Props = {
    onClick?: ()=>void;
}
export function ProfilerChat({onClick}:Props){
    return(
        <>
            <ContainerGeneralProfilerChat onClick={onClick}>
                <img src="https://avatars.githubusercontent.com/u/95627552?v=4" alt="" />
                <div>
                    <p>Lucas Soares</p>
                    <small>@lucassoareslim3</small>
                </div>
                <ChatCircleDotsIcon size={22} />
            </ContainerGeneralProfilerChat>
        </>
    )
}
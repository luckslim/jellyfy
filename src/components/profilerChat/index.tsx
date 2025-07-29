import { ChatCircleDotsIcon } from "@phosphor-icons/react";
import { ContainerGeneralProfilerChat } from "./style";

export function ProfilerChat(){
    return(
        <>
            <ContainerGeneralProfilerChat>
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
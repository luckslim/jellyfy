import { ChatCircleDotsIcon } from "@phosphor-icons/react";
import { ContainerGeneralInviteFriends } from "./style";

export function ProfilerInviteFriends(){
    return(
        <>
            <ContainerGeneralInviteFriends>
                <img src="https://avatars.githubusercontent.com/u/95627552?v=4" alt="" />
                <div>
                    <p>Lucas Soares</p>
                    <small>@lucassoareslim3</small>
                </div>
                <ChatCircleDotsIcon size={22} />
            </ContainerGeneralInviteFriends>
        </>
    )
}
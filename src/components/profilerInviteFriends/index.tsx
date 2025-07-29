import { CheckIcon,XIcon } from "@phosphor-icons/react";
import { ContainerGeneralInviteFriends, StyleSpan } from "./style";

export function ProfilerInviteFriends(){
    return(
        <>
            <ContainerGeneralInviteFriends>
                <img src="https://avatars.githubusercontent.com/u/95627552?v=4" alt="" />
                <div>
                    <p>Lucas Soares</p>
                    <small>@lucassoareslim3</small>
                </div>
                <StyleSpan>
                   <XIcon color="#fa0000" size={25} weight="fill" />
                   <CheckIcon color="#00f014" size={25} weight="fill" />
                </StyleSpan>
            </ContainerGeneralInviteFriends>
        </>
    )
}
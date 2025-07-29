import { ProfilerInviteFriends } from "../../../../components/profilerInviteFriends";
import { ContainerGeneralInviteFriends } from "./style";


export function InviteFriends() {
    return (
        <>
            <ContainerGeneralInviteFriends>
                <span>Solicitações de Amizade</span>
                <div>
                    <ProfilerInviteFriends />
                </div>
            </ContainerGeneralInviteFriends>
        </>
    )
}
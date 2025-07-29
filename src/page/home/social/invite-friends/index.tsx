import { CaretDoubleDownIcon } from "@phosphor-icons/react";
import { ProfilerInviteFriends } from "../../../../components/profilerInviteFriends";
import { ContainerGeneralInviteFriends } from "./style";


export function InviteFriends() {
    return (
        <>
            <ContainerGeneralInviteFriends>
                <span>Solicitações de Amizade <CaretDoubleDownIcon size={15} weight="regular" /></span>
                <div>
                    <ProfilerInviteFriends />
                </div>
            </ContainerGeneralInviteFriends>
        </>
    )
}
import { CaretDoubleDownIcon } from "@phosphor-icons/react";
import { ProfilerInviteFriends } from "../../../../components/profilerInviteFriends";
import { ContainerGeneralInviteFriends } from "./style";
import { useState } from "react";
export function InviteFriends() {
    const [state, setState] = useState(false)
    function handleInviteFriends() {
        setState((prev) => !prev)
    }
    return (
        <>
            <ContainerGeneralInviteFriends>
                <span onClick={handleInviteFriends}>Solicitações de Amizade <CaretDoubleDownIcon  size={15} weight="regular" /></span>
                <div>{state && (
                    <>
                    <ProfilerInviteFriends />
                    <ProfilerInviteFriends />
                    </>
                )}
                </div>
            </ContainerGeneralInviteFriends>
        </>
    )
}
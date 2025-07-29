import { ProfilerChat } from "../../../../components/profilerChat";
import { ContainerGeneralChat } from "./style";

export function Chat() {
    return (
        <>
            <ContainerGeneralChat>
                <span>Jellyfy Direct</span>
                <div>
                    <ProfilerChat />
                    <ProfilerChat />
                    <ProfilerChat />
                    <ProfilerChat />
                    <ProfilerChat />
                    <ProfilerChat />
                    <ProfilerChat />
                    <ProfilerChat />
                </div>
            </ContainerGeneralChat>
        </>
    )
}
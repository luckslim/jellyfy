import { ChatCircleDotsIcon } from "@phosphor-icons/react";
import { Profiler } from "../../../components/Profiler";
import { ContainerGeneralSocial } from "./style";

export function Social() {
  return (
    <>
      <ContainerGeneralSocial>
        <div>
          <Profiler />
          <ChatCircleDotsIcon size={22} />
        </div>
      </ContainerGeneralSocial>
    </>
  );
}

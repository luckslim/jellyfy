import { Chat } from "./chat";
import { InviteFriends } from "./invite-friends";
import { ContainerGeneralSocial } from "./style";

export function Social() {
  return (
    <>
      <ContainerGeneralSocial>
        <InviteFriends/>
        <Chat/>
      </ContainerGeneralSocial>
    </>
  );
}

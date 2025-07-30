import { CardChat } from "./card-chat";
import { Chat } from "./chat";
import { InviteFriends } from "./invite-friends";
import { ContainerGeneralSocial } from "./style";

export function Social() {
  return (
    <>
      <ContainerGeneralSocial>
        <InviteFriends/>
        <Chat/>
        <CardChat/>
      </ContainerGeneralSocial>
    </>
  );
}

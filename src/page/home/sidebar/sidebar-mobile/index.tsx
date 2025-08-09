import { Button } from "../../../../components/button";
import { ContainerGeneralSidebarMobile } from "./style";
import logo from "../../../../assets/images/logo-jellyfy.svg";
import {
  BookOpenIcon,
  BriefcaseIcon,
  CoinsIcon,
  EnvelopeIcon,
  HandshakeIcon,
  SignOutIcon,
  UserFocusIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
export function SidebarMobile() {
  return (
    <>
      <ContainerGeneralSidebarMobile>
        <span>
          <img width={20} src={logo} alt="" />
        </span>
        <div>
          <Button type="secondary" icon={[{ icon: UserFocusIcon }]} />
          <Button type="secondary" icon={[{ icon: EnvelopeIcon }]} />
          <Button type="secondary" icon={[{ icon: CoinsIcon }]} />
          <Button type="secondary" icon={[{ icon: HandshakeIcon }]} />
          <Button type="secondary" icon={[{ icon: UsersThreeIcon }]} />
          <Button type="secondary" icon={[{ icon: BriefcaseIcon }]} />
          <Button type="secondary" icon={[{ icon: BookOpenIcon }]} />
          <Button type="secondary" icon={[{ icon: SignOutIcon }]} />
        </div>
      </ContainerGeneralSidebarMobile>
    </>
  );
}

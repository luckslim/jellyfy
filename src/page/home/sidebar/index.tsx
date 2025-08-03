import { Button } from "../../../components/button";
import { Profiler } from "../../../components/Profiler";
import { ContainerGeneralSidebar } from "./style";
import logo from "../../../assets/images/logo-jellyfy.svg"
import { BookOpenIcon, BriefcaseIcon, CoinsIcon, EnvelopeIcon, HandshakeIcon, SignOutIcon, UserFocusIcon, UsersThreeIcon } from "@phosphor-icons/react";
export function Sidebar() {
    return (
        <>
            <ContainerGeneralSidebar>
                <span>
                    <p>Jellyfy</p>
                    <img width={20} src={logo} alt="" />
                </span>
                <Profiler />
                <div>
                    <Button icon={[{icon: UserFocusIcon}]} type="secondary" name="Meus Posts" />
                    <Button  icon={[{icon: EnvelopeIcon}]} type="secondary" name="Solicitações de Amizade" />
                    <Button  icon={[{icon: CoinsIcon}]} type="secondary" name="JellyCoins" />
                    <Button icon={[{icon: HandshakeIcon}]}  type="secondary" name="Apoiadores" />
                    <Button  icon={[{icon: UsersThreeIcon}]} type="secondary" name="Comunidades" />
                    <Button icon={[{icon: BriefcaseIcon}]} type="secondary" name="Trabalhos" />
                    <Button icon={[{icon: BookOpenIcon}]} type="secondary" name="Projetos & Rascunhos" />
                    <Button icon={[{icon: SignOutIcon}]} type="primary" name="Sair" />
                </div>
            </ContainerGeneralSidebar>
        </>
    )
}
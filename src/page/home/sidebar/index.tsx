import { Button } from "../../../components/button";
import { Profiler } from "../../../components/Profiler";
import { ContainerGeneralSidebar } from "./style";
import logo from "../../../assets/images/logo-jellyfy.svg"
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
                    <Button type="secondary" name="Meus Posts" />
                    <Button type="secondary" name="Solicitações de Amizade" />
                    <Button type="secondary" name="JellyCoins" />
                    <Button type="secondary" name="Apoiadores" />
                    <Button type="secondary" name="Comunidades" />
                    <Button type="secondary" name="Trabalhos" />
                    <Button type="secondary" name="Projetos & Rascunhos" />
                    <Button type="primary" name="Sair" />
                </div>
            </ContainerGeneralSidebar>
        </>
    )
}
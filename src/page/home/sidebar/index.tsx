import { Button } from "../../../components/button";
import { Profiler } from "../../../components/Profiler";
import { ContainerGeneralSidebar } from "./style";

export function Sidebar() {
    return (
        <>
            <ContainerGeneralSidebar>
                <Profiler/>
                <div>
                <Button type="secondary" name="Meus Posts" />
                <Button type="secondary" name="Solicitações de Amizade" />
                <Button type="secondary" name="JellyCoins" />
                <Button type="secondary" name="Apoiadores" />
                <Button type="secondary" name="Comunidades" />
                <Button type="secondary" name="Trabalhos" />
                <Button type="secondary" name="Projetos & Rascunhos" />
                <Button type="primary" name="Sair"/>
                </div>
            </ContainerGeneralSidebar>
        </>
    )
}
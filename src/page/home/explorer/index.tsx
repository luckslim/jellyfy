import {LightningIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { ContainerExplorerBody, ContainerExplorerBodyNews, ContainerExplorerHeader, ContainerGeneralExplorer } from "./style";

export function Explorer() {
    return (
        <>
            <ContainerGeneralExplorer>
                <ContainerExplorerHeader>
                    <Input placeholder="Faça Busca..." />
                    <Button type="secondary" icon={[{ icon: MagnifyingGlassIcon }]} />
                </ContainerExplorerHeader>
                Projetos em Alta 
                <ContainerExplorerBody>
                    <ul>
                        <li>Facebook<small>100<LightningIcon color="#ff19cd" size={15} weight="light"/></small></li>
                        <li>Instagram<small>100<LightningIcon color="#ff19cd" size={15} weight="light"/></small></li>
                        <li>Linkedin<small>100<LightningIcon color="#ff19cd" size={15} weight="light"/></small></li>
                    </ul>
                </ContainerExplorerBody>
                Notícias & Comunidade
                <ContainerExplorerBodyNews>

                </ContainerExplorerBodyNews>
            </ContainerGeneralExplorer>
        </>
    )
}
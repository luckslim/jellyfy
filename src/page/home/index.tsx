import { Explorer } from "./explorer";
import { Feed } from "./feed";
import { Sidebar } from "./sidebar";
import { SidebarMobile } from "./sidebar/sidebar-mobile";
import { ContainerGeneralHome } from "./style";

export function HomePage(){
    return(
        <>
            <ContainerGeneralHome>
                <Sidebar/>
                <SidebarMobile/>
                <Feed/>
                <Explorer/>
            </ContainerGeneralHome>
        </>
    )
}
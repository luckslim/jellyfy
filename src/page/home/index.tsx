import { Feed } from "./feed";
import { Sidebar } from "./sidebar";
import { SidebarMobile } from "./sidebar/sidebar-mobile";
import { Social } from "./social";
import { ContainerGeneralHome } from "./style";

export function HomePage(){
    return(
        <>
            <ContainerGeneralHome>
                <Sidebar/>
                <SidebarMobile/>
                <Feed/>
                <Social/>
            </ContainerGeneralHome>
        </>
    )
}
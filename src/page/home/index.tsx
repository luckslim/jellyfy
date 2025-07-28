import { Feed } from "./feed";
import { Sidebar } from "./sidebar";
import { Social } from "./social";
import { ContainerGeneralHome } from "./style";

export function HomePage(){
    return(
        <>
            <ContainerGeneralHome>
                <Sidebar/>
                <Feed/>
                <Social/>
            </ContainerGeneralHome>
        </>
    )
}
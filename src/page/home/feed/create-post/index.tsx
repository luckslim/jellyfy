import {PostComments } from "../../../../components/comments";
import { ContainerGeneralPost } from "./style";

export function CreatePostInFeed(){
    return(
        <>
            <ContainerGeneralPost>
                <PostComments urlImage="https://avatars.githubusercontent.com/u/95627552?v=4"/>
            </ContainerGeneralPost>
        </>
    )
}
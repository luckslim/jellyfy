import { CreatePostInFeed } from "./create-post";
import { FeedIn } from "./FeedIn";
import { ContainerGeneralFeed } from "./style";

export function Feed(){
    return(
        <>
        <ContainerGeneralFeed>
            <CreatePostInFeed/>
            <FeedIn/>
        </ContainerGeneralFeed>
        </>
    )
}
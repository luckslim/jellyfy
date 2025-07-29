import { CreatePostInFeed } from "./create-post";
import { FeedIn } from "./feedIn";
import { ContainerGeneralFeed } from "./style";

export function Feed(){
    return(
        <>
        <ContainerGeneralFeed>
            <CreatePostInFeed/>
            <FeedIn/>
            <FeedIn/>
            <FeedIn/>
        </ContainerGeneralFeed>
        </>
    )
}
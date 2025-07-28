import { Button } from "../../../../components/button";
import { TextArea } from "../../../../components/textarea";
import { GeneralCreatePostFeed } from "./style";

export function CreatePostInFeed() {
    return (
        <>
            <GeneralCreatePostFeed>
                <TextArea />
                <div>
                    <Button type="primary" name="Postar" />
                    
                </div>
            </GeneralCreatePostFeed>
        </>
    )
}
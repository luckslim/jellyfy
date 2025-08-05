import {
  ChatCenteredDotsIcon,
  CoinVerticalIcon,
  DotsThreeOutlineVerticalIcon,
  HeartIcon,
} from "@phosphor-icons/react";
import { Profiler } from "../../../../components/Profiler";
import { ContainerGeneralComments, ContainerGeneralFeedIn, StyleImage } from "./style";
import { Actions } from "../../../../components/actions";
import { Button } from "../../../../components/button";
import { CardCommentResp } from "../../../../components/card-comment-response";
import { useState } from "react";
import { CommentsToPost } from "../../../../components/comments-to-post";

export function FeedIn() {
  const [stateInsertComments, setStateInsertComments] = useState(false);
  const [stateShowComments, setStateShowComments] = useState(false)
  function handleStateInsertComments() {
    setStateInsertComments((prev) => !prev);
  }
  function handleShowComments() {
    setStateShowComments((prev) => !prev)
  }
  return (
    <>
      <ContainerGeneralFeedIn>
        <div>
          <Profiler />
          <DotsThreeOutlineVerticalIcon size={22} />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum beatae
          repudiandae vel vero voluptate mollitia doloribus quod sint impedit
          nisi soluta dicta odio deleniti distinctio, error voluptates nobis
          quisquam necessitatibus.
        </p>
        <StyleImage
          src="https://forbes.com.br/wp-content/uploads/2023/06/tech-ia-empresas-15Jun23-AdobeStock.jpg"
          alt=""
        />
        {stateInsertComments && <CardCommentResp />}
        <div>
          <Actions
            icons={[
              { icon: HeartIcon, text: 120, color:"red", onClick: () => "void" },
              { icon: ChatCenteredDotsIcon, text: 50, onClick: handleShowComments },
              { icon: CoinVerticalIcon, text: 30, color:"yellow",onClick: () => "void" },
            ]}
          />

          <Button
            onClick={handleStateInsertComments}
            name="Comentar"
            type="secondary"
          />
        </div>

      </ContainerGeneralFeedIn>
      {stateShowComments && (
      <ContainerGeneralComments>
        <CommentsToPost />
        <CommentsToPost />
        <CommentsToPost />
        <CommentsToPost />
        <CommentsToPost />
        <CommentsToPost />
      </ContainerGeneralComments>
      )}

    </>
  );
}

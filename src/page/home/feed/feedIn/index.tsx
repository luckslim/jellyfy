import {
  CurrencyDollarIcon,
  DatabaseIcon,
  DotsThreeOutlineVerticalIcon,
  FileIcon,
  GitBranchIcon,
  ImageSquareIcon,
  UserPlusIcon,
  VideoCameraIcon,
} from "@phosphor-icons/react";
import { Profiler } from "../../../../components/Profiler";
import { ContainerGeneralFeedIn, StyleImage } from "./style";
import { Actions } from "../../../../components/actions";
import { Button } from "../../../../components/button";
import { CardCommentResp } from "../../../../components/card-comment-response";
import { useState } from "react";

export function FeedIn() {
  const [state, setState] = useState(false);
  function handleStateComments() {
    setState((prev) => !prev);
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
          src="https://storage.caosplanejado.com/uploads/2020/11/ny.jpg"
          alt=""
        />
        {state && <CardCommentResp />}
        <div>
          <Actions
            icons={[
              { icon: ImageSquareIcon, onClick: () => "void" },
              { icon: VideoCameraIcon, onClick: () => "void" },
              { icon: GitBranchIcon, onClick: () => "void" },
              { icon: UserPlusIcon, onClick: () => "void" },
              { icon: CurrencyDollarIcon, onClick: () => "void" },
              { icon: FileIcon, onClick: () => "void" },
              { icon: DatabaseIcon, onClick: () => "void" },
            ]}
          />

          <Button
            onClick={handleStateComments}
            name="Comentar"
            type="secondary"
          />
        </div>
      </ContainerGeneralFeedIn>
    </>
  );
}

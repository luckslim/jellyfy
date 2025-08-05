import {
  CurrencyDollarIcon,
  DatabaseIcon,
  FileIcon,
  GitBranchIcon,
  ImageSquareIcon,
  PenNibIcon,
  UserPlusIcon,
  VideoCameraIcon,
} from "@phosphor-icons/react";
import { Actions } from "../actions";
import { Button } from "../button";
import { ContainerGeneralComments } from "./style";
import { DisplayTagGithub } from "../tags/tag-github/display-insert";
import { TagGithub } from "../tags/tag-github";
type Props = {
  urlImage?: string;
  contentText?: string;
};
export function PostComments({ contentText, urlImage }: Props) {
  return (
    <>
      <ContainerGeneralComments>
        <div>
          <img src={urlImage} alt="" />
          <textarea placeholder="Compartilhe suas Ideias...">
            {contentText}
          </textarea>
        </div>
        <DisplayTagGithub />
        <TagGithub urlRepository="https://avatars.githubusercontent.com/u/95627552?v=4" />
        <span>
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
          <Button icon={[{ icon: PenNibIcon }]} name="Postar" type="primary" />
        </span>
      </ContainerGeneralComments>
    </>
  );
}

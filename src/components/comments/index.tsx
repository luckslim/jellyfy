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
type Props = {
  urlImage?: string;
  contentText?: string;
};
export function Comments({ contentText, urlImage }: Props) {
  return (
    <>
      <ContainerGeneralComments>
        <div>
          <img src={urlImage} alt="" />
          <textarea placeholder="Compartilhe suas Ideias...">
            {contentText}
          </textarea>
        </div>
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
          <Button icon={[{icon: PenNibIcon}]} name="Postar"  type="primary" />
        </span>
      </ContainerGeneralComments>
    </>
  );
}

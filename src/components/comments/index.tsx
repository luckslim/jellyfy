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
import { ContainerDisplayTagGithub, ContainerGeneralComments } from "./style";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { TagGithub } from "../tags/tag-github";
import { Input } from "../input";
type Props = {
  urlImage?: string;
  contentText?: string;
};
const schemaRepository = z.object({
  urlRepository: z.string()
})
type SchemaRepository = z.infer<typeof schemaRepository>
export function PostComments({ contentText, urlImage }: Props) {
  const [stateRepositoryInsert, setStateRepositoryInsert] = useState(false)
  const [stateRepository, setStateRepository] = useState('')
  const { register, handleSubmit, reset } = useForm<SchemaRepository>({
    resolver: zodResolver(schemaRepository)
  })
  function handleSubmitRepository(data: SchemaRepository) {
    setStateRepository(data.urlRepository)
    return stateRepository;
  }
  function handleRepositoryInsert() {
    setStateRepositoryInsert((prev) => !prev)

  }
  useEffect(() => {
  if (stateRepositoryInsert) {
    reset({ urlRepository: "" });
    setStateRepository("");
  }
}, [stateRepositoryInsert]);
  return (
    <>
      <ContainerGeneralComments>
        <div>
          <img src={urlImage} alt="" />
          <textarea placeholder="Compartilhe suas Ideias...">
            {contentText}
          </textarea>
        </div>
        {stateRepositoryInsert &&
          (stateRepository.length > 0 ? (
            <TagGithub urlRepository={stateRepository} />
          ) : (
            <ContainerDisplayTagGithub onSubmit={handleSubmit(handleSubmitRepository)}>
              <Input
                type="text"
                register={{ ...register("urlRepository") }}
                placeholder="Insira a url do Repositório..."
              />
              <Button type="secondary" name="ok" />
            </ContainerDisplayTagGithub>
          ))}
        <span>
          <Actions
            icons={[
              { icon: ImageSquareIcon, onClick: () => "void" },
              { icon: VideoCameraIcon, onClick: () => "void" },
              { icon: GitBranchIcon, onClick: handleRepositoryInsert },
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

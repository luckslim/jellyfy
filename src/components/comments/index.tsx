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
import {
  ContainerDisplayTagGithub,
  ContainerGeneralComments,
  StyleImagePost,
} from "./style";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { TagGithub } from "../tags/tag-github";
import { Input } from "../input";

type Props = {
  urlImage?: string;
  contentText?: string;
};

// Schema para repositório e imagem
const schemaRepository = z.object({
  urlRepository: z.string().optional(),
  image: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => !file || file.size <= 5 * 1024 * 1024,
      "A imagem deve ter no máximo 5MB"
    )
    .refine(
      (file) => !file || ["image/jpeg", "image/png"].includes(file.type),
      "Formato inválido, use JPG ou PNG"
    ),
});

type SchemaRepository = z.infer<typeof schemaRepository>;

export function PostComments({ contentText, urlImage }: Props) {
  const [stateRepositoryInsert, setStateRepositoryInsert] = useState(false);
  const [stateRepository, setStateRepository] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit, reset, setValue } = useForm<SchemaRepository>(
    {
      resolver: zodResolver(schemaRepository),
    }
  );
  function handleSubmitRepository(data: SchemaRepository) {
    if (data.urlRepository) {
      setStateRepository(data.urlRepository);
    }
    return stateRepository;
  }
  function handleImageClick() {
    fileInputRef.current?.click();
  }
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file);
      setPreviewImage(URL.createObjectURL(file));
    }
  }
  function handleRepositoryInsert() {
    setStateRepositoryInsert((prev) => !prev);
  }
  useEffect(() => {
    if (stateRepositoryInsert) {
      reset({ urlRepository: "" });
      setStateRepository("");
    }
  }, [stateRepositoryInsert, reset]);

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
            <ContainerDisplayTagGithub
              onSubmit={handleSubmit(handleSubmitRepository)}
            >
              <Input
                type="text"
                register={{ ...register("urlRepository") }}
                placeholder="Insira a url do Repositório..."
              />
              <Button type="secondary" name="ok" />
            </ContainerDisplayTagGithub>
          ))}
        {previewImage && <StyleImagePost src={previewImage} alt="" />}
        <span>
          <Actions
            icons={[
              { icon: ImageSquareIcon, onClick: handleImageClick },
              { icon: VideoCameraIcon, onClick: () => "void" },
              { icon: GitBranchIcon, onClick: handleRepositoryInsert },
              { icon: UserPlusIcon, onClick: () => "void" },
              { icon: CurrencyDollarIcon, onClick: () => "void" },
              { icon: FileIcon, onClick: () => "void" },
              { icon: DatabaseIcon, onClick: () => "void" },
            ]}
          />

          {/* Input escondido para imagem */}
          <input
            type="file"
            accept="image/*"
            {...register("image")}
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />

          <Button icon={[{ icon: PenNibIcon }]} type="primary"/>
        </span>
      </ContainerGeneralComments>
    </>
  );
}

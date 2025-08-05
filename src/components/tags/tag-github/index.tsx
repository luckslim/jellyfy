import { GitBranchIcon } from "@phosphor-icons/react";
import { ContainerTagGithub } from "./style";
type Props = {
    urlRepository: string
}
export function TagGithub({urlRepository}:Props) {
    return (
        <>
            <ContainerTagGithub>
                <GitBranchIcon size={22} weight="fill" />
                <small>
                {urlRepository}
                </small>
            </ContainerTagGithub>
        </>
    )
}
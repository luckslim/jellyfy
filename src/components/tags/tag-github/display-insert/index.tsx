import { Button } from "../../../button";
import { Input } from "../../../input";
import { ContainerDisplayTagGithub } from "./style";

export function DisplayTagGithub(){
    return(
        <>
            <ContainerDisplayTagGithub>

                <Input  placeholder="Insira a url do Repositório..."/>
                <Button name="ok" type="secondary"/>
            </ContainerDisplayTagGithub>
        </>
    )
}
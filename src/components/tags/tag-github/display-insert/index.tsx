import * as z from "zod";
import { Button } from "../../../button";
import { Input } from "../../../input";
import { ContainerDisplayTagGithub } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { TagGithub } from "..";
const schemaRepository = z.object({
    urlRepository: z.string()
})
type SchemaRepository = z.infer<typeof schemaRepository>
export function DisplayTagGithub() {
    const [stateRepository, setStateRepository] = useState('')
    const { register, handleSubmit } = useForm<SchemaRepository>({
        resolver: zodResolver(schemaRepository)
    })
    function handleSubmitRepository(data: SchemaRepository) {
        setStateRepository(data.urlRepository)
        return stateRepository;
    }
    return (
        <>
            {stateRepository.length > 0 ? (<TagGithub urlRepository={stateRepository} />
            ) : (<ContainerDisplayTagGithub onSubmit={handleSubmit(handleSubmitRepository)}>
                <Input type="text" register={{ ...register('urlRepository') }} placeholder="Insira a url do Repositório..." />
                <Button type="secondary" name="ok" />
            </ContainerDisplayTagGithub>)}

        </>
    )
}
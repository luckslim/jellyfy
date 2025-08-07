import type {UseFormRegisterReturn } from "react-hook-form";
import { StyleInput } from "./style";
type Props = {
    type?: string;
    placeholder:string;
    register: UseFormRegisterReturn;
}
export function Input({placeholder, type, register, ...rest}:Props){
    return (
        <>
            <StyleInput {...register} {...rest}  type={type} placeholder={placeholder}>
            </StyleInput>
        </>
    )
}
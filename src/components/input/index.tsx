import { StyleInput } from "./style";
type Props = {
    type?: string
    placeholder:string
}
export function Input({placeholder, type}:Props){
    return (
        <>
            <StyleInput type={type} placeholder={placeholder}>
            </StyleInput>
        </>
    )
}
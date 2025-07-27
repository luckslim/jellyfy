import { StyleInput } from "./style";
type Props = {
    placeholder:string
}
export function Input({placeholder}:Props){
    return (
        <>
            <StyleInput placeholder={placeholder}>
            </StyleInput>
        </>
    )
}
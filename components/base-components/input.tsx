import { Input } from "@/components/ui/input"

type props = {
    classname: string;
    placeholder: string;
}

const InputCb = ({classname, placeholder}: props) => {
    return(
        <Input className={classname} placeholder={placeholder} />
    )
}

export default InputCb;
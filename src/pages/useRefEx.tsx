import { useRef } from "react";

export default function UseRefEx(){
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () =>{
        inputRef.current?.focus();

    }

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="Type here" />
            <button onClick={handleClick} >Click to focus</button>
        </div>
    )

}
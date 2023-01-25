import React, { useEffect } from "react";
import { Alert } from "./Alert";

type InputProps = {
    placeHolder: string;
    inputProcess: (value: string) => string;
}
export const Input: React.FC<InputProps> = ({ placeHolder, inputProcess }) => {
    
    let inputElement: HTMLInputElement | null;
    
    //const inputId = React.useRef(Math.round(Math.random() * 100000000) + "");
    const inputId = React.useRef(getInputId());
    
    const [message, setMessage] = React.useState('');
    function processGo(): void {
        setMessage('');
        const messageRet: string = inputProcess(inputElement!.value);
        if (!messageRet) {
            inputElement!.value = '';
        } else {
            setMessage(messageRet);
        }
    }
    
    useEffect(() => {
        inputElement = document.getElementById(inputId.current) as HTMLInputElement;
    })
    return <div>
        <input id={inputId.current}  placeholder={placeHolder} style={{width: "35vw"}}/>
        <button onClick={processGo}>GO</button>
        {message && <Alert type={"error"} message={message}></Alert>}

    </div>
}

//-----getting unique id---
function getInputId(): string {
    let id: string = getRandId();
    while(document.getElementById(id) !== null) {
        id = getRandId();
    }
    return id;
}
function getRandId(): string {
    return Math.floor(Math.random() * 1000) + '';//alternative for get string: ....toString(10)
}
//-----
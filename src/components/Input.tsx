import React from "react"
export const Input: React.FC = () => {
    let inputElement: HTMLInputElement | null 
    = document.getElementById("1") as HTMLInputElement;
    function processGo(): void {
       console.log(inputElement?.value);
    }

    return <div>
        <input id="1"/>
        <button onClick={processGo}>GO</button>
    </div>
}
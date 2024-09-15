import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Apparatuur() {
const codeString = 
`let hardware = {
    computer: {
        processor: "Ryzen 2600",
        gpu: "RX 580",
        ram: "16GB"
    },
    laptop: {
        brand: "HP"
        processor: "Ryzen 7 5700U",
        gpu: "Radeon Graphics"
    }
}

let software = {
    IDE: ["vscode", "Intellij"],
    hosting: ["hostinger"]
}`;

    const style = {
        backgroundColor: "black"
    }

    return (
        <div className="">
            <SyntaxHighlighter language="javascript" style={atomDark} showLineNumbers={true} customStyle={style}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Persoon() {
const codeString = 
`const NAME = "Sander Sekreve";

let age = ${getAge(new Date('2002-05-14'))};

let hobbies = [
    "programming",
    "gaming",
    "gym",
    // "sleeping"
];

const favouriteAnimal = {
    type: "cat",
    name: "Sita",
    age: ${getAge(new Date('2010-03-01'))}
};`;

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

function getAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
  
    return age;
}
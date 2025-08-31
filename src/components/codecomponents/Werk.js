import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Werk() {
	const codeString = `let internships [
    "OneStepSolutions", // Laravel
    "Botman Sound & Vision", // WordPress
    "Re:Shark", // Django & Svelte
];

let studies = [
    "MBO Software Development" // 2018 - 2021
    "HBO Software Engineering" // 2022 - 2026
]

// Programming languages
let languages = ["HTML", "CSS", "JavaScript", "TypeScript", "Java", "Python"];

let frameworks = [
    "React",
    "Vue.js",
    "Next.js", // Still learning...
    "TailwindCSS",
    "Laravel",
    "Django"
];`;

	const style = {
		backgroundColor: "black",
	};

	return (
		<div className="">
			<SyntaxHighlighter
				language="javascript"
				style={atomDark}
				showLineNumbers={true}
				customStyle={style}
			>
				{codeString}
			</SyntaxHighlighter>
		</div>
	);
}

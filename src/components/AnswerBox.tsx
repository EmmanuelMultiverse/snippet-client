import Editor from "react-simple-code-editor";
import {highlight, languages} from "prismjs";
import { useState } from "react";

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python'; 
import 'prismjs/components/prism-java';     
import 'prismjs/components/prism-css';      
import 'prismjs/components/prism-typescript'; 

import 'prismjs/themes/prism-okaidia.css';

import Select from "react-select";
import type { ActionMeta, SingleValue } from "react-select";


interface LanguageOptions {
    value: string,
    label: string,

}

enum CodeLanguage {
    JavaScript = 'javascript',
    Python = 'python',
    Java = 'java',
    HTML = 'html',
    CSS = 'css',
    TypeScript = 'typescript',
}

interface SolutionSnippet {
  language: string;
  codingSnippet: string;
}

interface SolutionsMap {
  [key: string]: SolutionSnippet[];
}

interface AnswerBoxProps {
    setAnswerBox: React.Dispatch<React.SetStateAction<Boolean>>;
    setSolutions: React.Dispatch<React.SetStateAction<SolutionsMap>>;
    question: string;
}

const AnswerBox = ({ setAnswerBox, setSolutions, question}: AnswerBoxProps) => {

    const [codeSnippet, setCodeSnippet] = useState<string>("");

    const languageOptions: LanguageOptions[] = [
        { value: CodeLanguage.JavaScript, label: "JavaScript" }, 
        { value: CodeLanguage.Python, label: "Python" },
        { value: CodeLanguage.Java, label: "Java" },
        { value: CodeLanguage.HTML, label: "HTML" },
        { value: CodeLanguage.CSS, label: "CSS" },
        { value: CodeLanguage.TypeScript, label: "TypeScript" },
    ];

    const defaultLanguage = languageOptions.find(
        option => option.value === "javascript"
    ) || null;

    const [selectedLanguage, setSelectedLanguage] = useState<SingleValue<LanguageOptions>>(defaultLanguage);

    const handleLanguageChange = (newValue: SingleValue<LanguageOptions>, actionMeta: ActionMeta<LanguageOptions>) => {
        setSelectedLanguage(newValue);
    }

    const handleSubmit = () => {
        if (!selectedLanguage?.value) {
            console.warn("No language selected for the solution.");
            return;
        }

        const newSolution: SolutionSnippet = {
            language: selectedLanguage.value,
            codingSnippet: codeSnippet,
        }

        setSolutions(prev => {
            const existingSolutions = prev[question] || [];

            return {
                ...prev,
                [question]: [...existingSolutions, newSolution],

            }
        })

        setAnswerBox(false);
    }

     const getPrismLanguage = (langValue: string | undefined | null) => {
        if (!langValue) return languages.javascript; // Fallback to JS if no language is selected

        switch (langValue) {
            case CodeLanguage.JavaScript: return languages.javascript;
            case CodeLanguage.Python: return languages.python;
            case CodeLanguage.Java: return languages.java;
            case CodeLanguage.HTML: return languages.markup; // Prism uses 'markup' for HTML/XML
            case CodeLanguage.CSS: return languages.css;
            case CodeLanguage.TypeScript: return languages.typescript;
            default: return languages.javascript; // Default fallback
        }
    };

    return (
        <div className="flex flex-col bg-[#272822] rounded-md border-black w-150 h-125 border-2 p-3 gap-4">
            <Select options={languageOptions} value={selectedLanguage} onChange={handleLanguageChange} isSearchable styles={{
                    control: (provided) => ({
                        ...provided,
                        backgroundColor: '#3D3E36',
                        borderColor: '#3D3E36',
                        color: 'white',
                    }),
                    singleValue: (provided) => ({
                        ...provided,
                        color: 'white',
                    }),
                    menu: (provided) => ({
                        ...provided,
                        backgroundColor: '#3D3E36',
                    }),
                    option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isFocused ? '#555651' : '#3D3E36',
                        color: 'white',
                    }),
                    input: (provided) => ({
                        ...provided,
                        color: 'white',
                    }),
                }}
            />
            <div className="w-full h-full rounded overflow-auto">
                <Editor
                    value={codeSnippet}
                    onValueChange={(e) => setCodeSnippet(e)}
                    highlight={code => highlight(code, getPrismLanguage(selectedLanguage?.value), selectedLanguage?.value || "js")}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 17,
                        width: "100%",
                        height: "100%",
                        backgroundColor: '#3D3E36', 
                        color: '#f8f8f2',
                    }}
                />
            </div>
            <button className="bg-white text-black rounded-md text-sm w-20 p-1 m-0" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AnswerBox;
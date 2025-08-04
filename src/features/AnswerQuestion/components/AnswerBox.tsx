import Editor from "react-simple-code-editor";
import { highlight } from "prismjs";
import { useState } from "react";
import { getPrismLanguage  } from "../Utils.ts";

import 'prismjs'; 
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python'; 
import 'prismjs/components/prism-java';     
import 'prismjs/components/prism-css';      
import 'prismjs/components/prism-typescript'; 

import 'prismjs/themes/prism-okaidia.css';

import Select from "react-select";
import type { SingleValue } from "react-select";
import type { LanguageOptions } from "../types/types.ts";
import { languageOptions } from "../types/types.ts";
import { useQuestionDetails } from "../SolutionsContext.tsx";
import type { Solution } from "@/types/types.js";
import { useNavigate } from "react-router";

const AnswerBox = () => {

    const [codeSnippet, setCodeSnippet] = useState<string>("javascript");
    const [selectedLanguage, setSelectedLanguage] = useState<SingleValue<LanguageOptions>>(languageOptions[0]);

    const handleLanguageChange = (newValue: SingleValue<LanguageOptions>) => {
        setSelectedLanguage(newValue);
    }

    const navigate = useNavigate();

    const { solutions, setSolutions, question } = useQuestionDetails();

    const handleSubmit = () => {
        
        const newSolution: Solution = {
            id: solutions.length + 1,
            questionId: question?.id || -1,
            language: selectedLanguage?.value || "",
            codeSnippet: codeSnippet,
        }

        setSolutions(prev => {
            return [
                ...prev,
                newSolution
            ]
        })

        navigate(`/questions/${question?.id}/solutions`)
    }

    return (
        <div className="flex flex-col bg-[#272822] rounded-md border-black w-150 h-125 border-2 p-3 gap-4">
            <Select options={languageOptions} value={languageOptions[0]} onChange={handleLanguageChange} isSearchable styles={{
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
            <button className="bg-white text-black rounded-md text-sm w-20 p-1 m-0 cursor-pointer" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AnswerBox;
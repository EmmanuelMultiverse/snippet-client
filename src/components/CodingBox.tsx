import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodingBoxProps {
    language: string;
    codingSnippet: string;
}

const CodingBox = ({ language, codingSnippet }: CodingBoxProps) => {
    return (
        <div className="flex flex-col gap-2 bg-[#272822] p-4 rounded-md w-90 h-50"> 
            <div className="text-white text-lg font-bold">Coding Language: {language}</div>
            <SyntaxHighlighter
                language={language}
                style={okaidia}
                customStyle={{
                    borderRadius: '5px',     
                    padding: '1em',    
                    marginTop: "auto",      
                    overflowX: 'auto',  
                    backgroundColor: "#3D3E36",
                    flexGrow: 1,

                }}
                wrapLongLines={true}
            >
                {codingSnippet}
            </SyntaxHighlighter>
        </div>
    );
}

export default CodingBox;
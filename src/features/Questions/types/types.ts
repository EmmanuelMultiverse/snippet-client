export interface LanguageOptions {
    value: string;
    label: string;
}

export interface SolutionSnippet {
  language: string;
  codingSnippet: string;
  id: string;
  questionId: string;
}

export interface SolutionsMap {
  [key: string]: SolutionSnippet[];
}

export enum CodeLanguage {
    JavaScript = 'javascript',
    Python = 'python',
    Java = 'java',
    HTML = 'html',
    CSS = 'css',
    TypeScript = 'typescript',
}

export const languageOptions: LanguageOptions[] = [
        { value: CodeLanguage.JavaScript, label: "JavaScript" }, 
        { value: CodeLanguage.Python, label: "Python" },
        { value: CodeLanguage.Java, label: "Java" },
        { value: CodeLanguage.HTML, label: "HTML" },
        { value: CodeLanguage.CSS, label: "CSS" },
        { value: CodeLanguage.TypeScript, label: "TypeScript" },
];
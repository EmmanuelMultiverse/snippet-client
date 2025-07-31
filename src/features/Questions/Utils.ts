import { CodeLanguage  } from "./types/types";
import { languages  } from "prismjs";

export const getPrismLanguage = (langValue: string | undefined | null) => {
    if (!langValue) return languages.javascript; 

    switch (langValue) {
        case CodeLanguage.JavaScript: return languages.javascript;
        case CodeLanguage.Python: return languages.python;
        case CodeLanguage.Java: return languages.java;
        case CodeLanguage.HTML: return languages.markup; 
        case CodeLanguage.CSS: return languages.css;
        case CodeLanguage.TypeScript: return languages.typescript;
        default: return languages.javascript; 
    }
};
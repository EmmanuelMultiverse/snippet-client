import React, { createContext, useContext, useState, type ReactNode } from "react";
import type { Question, Solution } from "@/types/types";

interface QuestionDetailsContextTypes {
    solutions: Solution[];
    setSolutions: React.Dispatch<React.SetStateAction<Solution[]>>;
    question: Question | null;
    setQuestion: (question: Question) => void;
}


const QuestionDetailsContext = createContext<QuestionDetailsContextTypes | undefined>(undefined);

export const QuestionDetailsProvider = ( { children }: { children: ReactNode}) => {

    const [solutions, setSolutions] = useState<Solution[]>([]);
    const [question, setQuestion] = useState<Question | null>(null);

    const value = {
        solutions,
        setSolutions,
        question,
        setQuestion,
    }

    return <QuestionDetailsContext.Provider value={value}>{children}</QuestionDetailsContext.Provider>
}

export const useQuestionDetails = () => {
    const context = useContext(QuestionDetailsContext);
    
    if (context === undefined) {
        throw new Error("useSolutions must be used within a SolutionsProvider");
    }

    return context;
}
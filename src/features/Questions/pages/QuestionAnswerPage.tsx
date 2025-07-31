import { useEffect, useState } from "react";
import QuestionBox from "../components/QuestionBox";
import questions from "@/../Data/QuestionsData.json";
import solutions from "@/../Data/SolutionsData.json";
import { useParams } from "react-router";
import AnswerBox from "@/features/Questions/components/AnswerBox";
import type { SolutionSnippet } from "../types/types";

interface Question {
    text: string,
}

const QuestionAnswerPage = () => {
    
    const [question, setQuestion] = useState<string>("");
    const [solutions, setSolutions] = useState<SolutionSnippet[]>([])

    useEffect(() => {
        let solutions: SolutionSnippet[] = [];
        solutions.forEach(s => solutions.push(s));
        setSolutions(() => solutions);
        
        let question = questions.find(q => q.id === id);
        
        if (question) {
            setQuestion(() => question.text);
        } else {
            setQuestion(() => "Question not found!");
        }

    }, [])

    const { id } = useParams();

    useEffect(() => {

        
    })
    
    return (
        <div>
            <QuestionBox question={question}/>
            <AnswerBox question={question}/>
        </div>
    )
}

export default QuestionAnswerPage;
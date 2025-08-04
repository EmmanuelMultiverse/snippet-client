import { useEffect } from "react";
import { useParams } from "react-router";

import QuestionBox from "@/components/QuestionBox";
import questions from "@/../Data/QuestionsData.json";
import AnswerBox from "@/features/AnswerQuestion/components/AnswerBox";

import type { Question, Solution } from "@/types/types";
import { QuestionDetailsProvider, useQuestionDetails } from "../SolutionsContext";
import { getSolutions } from "../Utils";

const AnswerQuestionPageContent = () => {
    
    const { id } = useParams<{id: string}>();
    const idAsNumber = parseInt(id || "", 10);

    const { question, setSolutions, setQuestion } = useQuestionDetails();   

    useEffect(() => {
        let foundQuestion: Question | undefined = questions.find((q => q.id == idAsNumber));

        if (foundQuestion) {
            let questionSolutions: Solution[] = [];
            
            getSolutions().forEach(s => {
                if (s.id == foundQuestion.id) questionSolutions.push(s);
            })

            setQuestion(foundQuestion);
            setSolutions(questionSolutions);
        }
    }, [])

    if (question == null) {
        return <div>QUESTION NOT FOUND</div>
    } else {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="flex items-center gap-2">
                    <QuestionBox question={question}/>
                    <AnswerBox />
                </div>
            </div>
        )
    }
}

const AnswerQuestionPage = () => {
    return (
        <QuestionDetailsProvider>
            <AnswerQuestionPageContent />
        </QuestionDetailsProvider>
    )
}

export default AnswerQuestionPage;
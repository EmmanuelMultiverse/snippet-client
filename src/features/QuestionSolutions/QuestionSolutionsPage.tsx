import QuestionBox from "@/components/QuestionBox";
import { getQuestions, getSolutions } from "@/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type {Question, Solution} from "@/types/types"
import CodingBox from "./CodingBox";

const QuestionSolutionsPage = () => {

    const { id } = useParams<{id: string}>();
    const idAsNumber = parseInt(id || "");

    const [question, setQuestion] = useState<Question | null>(null);
    const [solutions, setSolutions] = useState<Solution[]>([]);

    useEffect(() => {

        let foundQuestion = getQuestions().find(q => q.id === idAsNumber);

        if (foundQuestion) {
            const questionSolutions: Solution[] = [];

            getSolutions().forEach(s => {
                if (s.questionId === idAsNumber) questionSolutions.push(s);
            })

            setQuestion(foundQuestion);
            setSolutions(questionSolutions);
        }

    }, [])

    if (question == null) {
        return <div>Question not found!</div>
    } else {
        return (
            <div className="flex flex-col justify-center items-center">
                <QuestionBox question={question}/>
                <div className="flex gap-2 flex-wrap justify-center">
                    {solutions.map(s => <CodingBox language={s.language} codingSnippet={s.codeSnippet}/>)}
                </div>
            </div>
        )
    }
}

export default QuestionSolutionsPage;
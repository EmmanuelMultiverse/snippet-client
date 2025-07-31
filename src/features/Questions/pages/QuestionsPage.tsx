import { useEffect, useState } from "react";
import questionsSeed from "@/../Data/QuestionsData.json"
import QuestionBox from "../components/QuestionBox";

const QuestionPage = () => {

    const [questions, setQuestions] = useState<string[]>([]);

    useEffect(() => {
        let questions: string[] = [];

        questionsSeed.forEach(q => questions.push(q.text));

        setQuestions(() => questions);
    }, [])

    return (
        <div className="flex gap-0">
            {questions.map(q => <QuestionBox question={q} />)}
        </div>
    )
}

export default QuestionPage;
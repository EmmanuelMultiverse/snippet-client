import { useEffect, useState } from "react";

import questionsSeed from "@/../Data/QuestionsData.json";
import QuestionBox from "@/components/QuestionBox";
import type { Question } from "@/types/types";

const HomePage = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [maxHeight, setMaxHeight] = useState<number>(0);
    
    useEffect(() => {
        let loadedQuestions: Question[] = [];

        questionsSeed.forEach(q => loadedQuestions.push(q));

        setQuestions(loadedQuestions);
    }, [])

    const handleBoxResize = (height: number) => {
        if (height > maxHeight) setMaxHeight(height);

    }

    return (
        <div className="flex">
            {questions.map(q => 
                <QuestionBox 
                question={q}
                maxHeight={maxHeight}
                onResize={handleBoxResize}/>)}
        </div>
    )
}

export default HomePage;
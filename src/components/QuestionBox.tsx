import { useEffect, useRef } from "react";
import Button from "./Button";
import type { Question } from "@/types/types";
import { useNavigate } from "react-router";

interface QuestionBoxProps {
    question: Question,
    maxHeight?: number;
    onResize?: ( height: number) => void;
}

interface QuestionBoxLabelProps {
    question: string;
}

const QuestionBox = ({ question, maxHeight, onResize }: QuestionBoxProps) => {

    const navigate = useNavigate();

    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (boxRef.current && onResize) {
            onResize(boxRef.current.offsetHeight);
        }
    }, [onResize]);

    return (
        <div 
            ref={boxRef} 
            className="flex flex-col bg-[#272822] w-60 rounded-md p-3 m-2 gap-2 flex-shrink-0"
            style={{
                height: maxHeight && maxHeight > 0 ? `${maxHeight}px` : 'auto'
            }}
            >
            <QuestionBoxLabel question={question.text}/>
            <div className="flex gap-2 mt-auto">
                <Button label="Answer" handleClick={() => navigate(`/questions/${question.id}`)} />
                <Button label="Solutions" handleClick={() => navigate(`/questions/${question.id}/solutions`)} />
            </div>
        </div>
    )
}

const QuestionBoxLabel = ({ question }: QuestionBoxLabelProps) => {
    return (
        <div className="rounded-md text-white">
            {question}
        </div>
    )
}

export default QuestionBox;
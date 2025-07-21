import type React from "react";

interface QuestionBoxInterface {
    question: string,
    setAnswerBox: React.Dispatch<React.SetStateAction<Boolean>>,
    setCurrentQuestion: React.Dispatch<React.SetStateAction<string>>,
    setSolution: React.Dispatch<React.SetStateAction<Boolean>>,

}

const QuestionBox = ({ question, setAnswerBox, setCurrentQuestion, setSolution}: QuestionBoxInterface) => {

    const handleAnswerClick = () => {
        setAnswerBox(prev => !prev);
        setCurrentQuestion(question);
        setSolution(false);
    }

    const handleSolutionClick = () => {
        setAnswerBox(false);
        setCurrentQuestion(question)
        setSolution(true);
    }


    return (
        <div className="flex flex-col bg-[#272822] w-60 h-30 rounded-md p-3 m-2 gap-2 flex-shrink-0">
            <div className="rounded-md text-white"> 
                {question}
            </div>
            <div className="flex gap-2 mt-auto">
                <button className="bg-white  rounded-md py-1 px-3 text-black text-sm" onClick={handleAnswerClick}>Answer</button>
                <button className="bg-white rounded-md py-1 px-3 text-black text-sm" onClick={handleSolutionClick}>Solutions</button>
            </div>
        </div>
    )
}

export default QuestionBox;
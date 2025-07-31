import Button from "./Button";
import QuestionBoxLabel from "./QuestionBoxLabel";

interface QuestionBoxProps {
    question: string,

}

const QuestionBox = ({ question }: QuestionBoxProps) => {

    return (
        <div className="flex flex-col bg-[#272822] w-60 h-30 rounded-md p-3 m-2 gap-2 flex-shrink-0">
            <QuestionBoxLabel question={question}/>
            <div className="flex gap-2 mt-auto">
                <Button label="Answer" handleClick={() => {}} />
                <Button label="Solutions" handleClick={() => {}} />
            </div>
        </div>
    )
}

export default QuestionBox;
interface QuestionBoxLabelProps {
    question: string;
}

const QuestionBoxLabel = ({ question }: QuestionBoxLabelProps) => {
    return (
        <div className="rounded-md text-white">
            {question}
        </div>
    )
}

export default QuestionBoxLabel;
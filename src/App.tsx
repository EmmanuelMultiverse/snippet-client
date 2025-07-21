import "./App.css";
import AnswerBox from "./components/AnswerBox";
import CodingBox from "./components/CodingBox";
import QuestionBox from "./components/QuestionBox";
import WhiteHouseIcon from "./assets/white_house_icon.svg"
import { useState } from "react";

interface SolutionSnippet {
  language: string;
  codingSnippet: string;
}

interface SolutionsMap {
  [key: string]: SolutionSnippet[];
}


function App() {

  const initialSolutions: SolutionsMap = {
    "How to add element to array": [
      {
        "language": "javascript",
"codingSnippet": `const add = (a, b) => {
  return a + b;
}`        
      },
      {
        "language": "cpp",
"codingSnippet": `int add(a, b)
{
  return a + b;
}`        
      },
      {
        "language": "typescript",
"codingSnippet": `const add = (a: number, b: number): number {
  return a + b;
}`        
      },
      {
        "language": "python",
"codingSnippet": `def add(a, b):
  return a - (-b);`        
      },
      {
        "language": "python",
"codingSnippet": `def add(a, b):
  return a - (-b);`        
      },
      {
        "language": "python",
"codingSnippet": `def add(a, b):
  return a - (-b);`        
      },
      {
        "language": "python",
"codingSnippet": `def add(a, b):
  return a - (-b);`        
      },
      {
        "language": "python",
"codingSnippet": `def add(a, b):
  return a + b`        
      },
    ],
    "How to remove element from array": [],
    "How to copy array": [],
    "How to Filter out string from an array": [],
  }

  const [answerBox, setAnswerBox] = useState<Boolean>(false);
  const [solutionBox, setSolutionBox] = useState<Boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const [solutions, setSolutions] = useState<SolutionsMap>(initialSolutions);

  const questions: string[] = [
    "How to add element to array",
    "How to remove element from array",
    "How to copy array",
    "How to Filter out string from an array",

  ]

  const handleHomeClick = () => {
    setAnswerBox(false);
    setSolutionBox(false);
  }

  
  
  return (
    <>
      <div className="relative flex justify-center items-center w-screen h-screen">
        <div
          className="absolute top-5 right-5 bg-black rounded-full p-2 cursor-pointer flex items-center justify-center w-[3rem] h-[3rem]" // Using arbitrary values
          onClick={handleHomeClick}
        >
          <img
            src={WhiteHouseIcon}
            alt="White House Icon"
            className="w-full h-full object-contain"
          />
        </div>
        {answerBox && (
          <>
            <QuestionBox question={currentQuestion} setAnswerBox={setAnswerBox} setCurrentQuestion={setCurrentQuestion} setSolution={setSolutionBox}/> 
            <AnswerBox setAnswerBox={setAnswerBox} setSolutions={setSolutions} question={currentQuestion}/>
          </>
        )}
        {solutionBox && currentQuestion && (
          <div className="flex flex-col items-center gap-4 h-full w-full">
            <QuestionBox question={currentQuestion} setAnswerBox={setAnswerBox} setCurrentQuestion={setCurrentQuestion} setSolution={setSolutionBox}/> 
            <div className="flex w-full flex-wrap gap-4 justify-center">
              {solutions[currentQuestion!].map(
                (solution, index) => (<CodingBox key={index} language={solution.language} codingSnippet={solution.codingSnippet}/>)
              )}
            </div>
          </div>
        )}
        {!answerBox && !solutionBox &&
          (
            <div className="flex gap-0">
              {questions.map(question => <QuestionBox question={question} setAnswerBox={setAnswerBox} setCurrentQuestion={setCurrentQuestion} setSolution={setSolutionBox}/>)}              
            </div>
          )
        }
      </div>
    </>
  )
}

export default App

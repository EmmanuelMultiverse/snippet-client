import "./App.css";
import AnswerBox from "@/features/Questions/components/AnswerBox";
import CodingBox from "@/features/Editor/components/CodingBox";
import QuestionBox from "@/features/Questions/components/QuestionBox";
import WhiteHouseIcon from "@/assets/white_house_icon.svg"
import solutionsSeed from "../../Data/SolutionsData.json";
import questionsSeed from "../../Data/QuestionsData.json"


import { useEffect, useState } from "react";

import type { SolutionsMap } from '@/types/types';
import LoginPage from "@/features/Authentication/pages/LoginPage";
import { Route, Routes } from "react-router";
import RegisterPage from "@/features/Authentication/pages/RegisterPage";
import AuthLayout from "./Layouts/AuthLayout";
import AppLayout from "./Layouts/AppLayout";
import QuestionPage from "@/features/Questions/pages/QuestionsPage";


function App() {

  const [answerBox, setAnswerBox] = useState<Boolean>(false);
  const [solutionBox, setSolutionBox] = useState<Boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const [solutions, setSolutions] = useState<SolutionsMap>(solutionsSeed);
  const [loggedIn, toggleLoggedIn] = useState<Boolean>(false);

  const IS_DEV = process.env.DEV;

  if (IS_DEV) {
    return (
      <Routes>
        <Route index element={<RegisterPage />} />
        
        <Route element={< AuthLayout />}>
          <Route path="login" element={<LoginPage />}/>
          <Route path="register" element={<RegisterPage />}/>
        </Route>

        <Route element={< AppLayout />}>
            <Route path="questions" element={<QuestionPage />} />
        </Route>
        

      </Routes>
    )
  }
}
  
//   if (!loggedIn) {
//     return (
//       <div className="flex justify-center items-center h-screen w-screen">
//         <LoginPage setIsLoggedIn={toggleLoggedIn}/>
//       </div>
//     )
//   } else {
//     return (
//       <>
//         <div className="relative flex justify-center items-center w-screen h-screen">
//           <div
//             className="absolute top-5 right-5 bg-black rounded-full p-2 cursor-pointer flex items-center justify-center w-[3rem] h-[3rem]"
//             onClick={handleHomeClick}
//           >
//             <img
//               src={WhiteHouseIcon}
//               alt="White House Icon"
//               className="w-full h-full object-contain"
//             />
//           </div>
//           {answerBox && (
//             <>
//               <QuestionBox question={currentQuestion} setAnswerBox={setAnswerBox} setCurrentQuestion={setCurrentQuestion} setSolution={setSolutionBox}/> 
//               <AnswerBox setAnswerBox={setAnswerBox} setSolutions={setSolutions} question={currentQuestion}/>
//             </>
//           )}
//           {solutionBox && currentQuestion && (
//             <div className="flex flex-col items-center gap-4 h-full w-full">
//               <QuestionBox question={currentQuestion} setAnswerBox={setAnswerBox} setCurrentQuestion={setCurrentQuestion} setSolution={setSolutionBox}/> 
//               <div className="flex w-full flex-wrap gap-4 justify-center">
//                 {solutions[currentQuestion!].map(
//                   (solution, index) => (<CodingBox key={index} language={solution.language} codingSnippet={solution.codingSnippet}/>)
//                 )}
//               </div>
//             </div>
//           )}
//           {!answerBox && !solutionBox &&
//             (
//               <div className="flex gap-0">
//                 {questions.map(question => <QuestionBox question={question} setAnswerBox={setAnswerBox} setCurrentQuestion={setCurrentQuestion} setSolution={setSolutionBox}/>)}              
//               </div>
//             )
//           }
//         </div>
//       </>
//     )
//   }
// }

export default App;

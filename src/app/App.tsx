import "./App.css";

import { Route, Routes } from "react-router";
import { AuthProvider } from "@/app/AuthContext";

import LoginPage from "@/features/Authentication/pages/LoginPage";
import RegisterPage from "@/features/Authentication/pages/RegisterPage";
import AuthLayout from "./Layouts/AuthLayout";
import AppLayout from "./Layouts/AppLayout";
import HomePage from "./pages/Homepage";
import AnswerQuestionPage from "@/features/AnswerQuestion/pages/AnswerQuestionPage";
import QuestionSolutionsPage from "@/features/QuestionSolutions/QuestionSolutionsPage";


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={< AuthLayout />}>
          <Route index element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />}/>
          <Route path="register" element={<RegisterPage />}/>
        </Route>

        <Route element={< AppLayout />}>
            <Route path="homepage" element={<HomePage />} />
            <Route path="questions/:id" element={<AnswerQuestionPage />} />
            <Route path="questions/:id/solutions" element={<QuestionSolutionsPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
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

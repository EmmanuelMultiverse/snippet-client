import "./App.css";

import { Route, Routes } from "react-router";
import { AuthProvider } from "@/app/contexts/AuthContext";

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

export default App;

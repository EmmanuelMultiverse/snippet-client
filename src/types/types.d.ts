export interface Solution {
  id: number;
  questionId: number;
  language: string;
  codeSnippet: string;
}

export interface Question {
  id: number;
  text: string;
}

interface AuthFormData {
    username: string;
    password: string;
    email?: string;

}


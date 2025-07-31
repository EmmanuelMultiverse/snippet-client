export interface CodingSnippet {
  language: string;
  codingSnippet: string;
}

export type SolutionEntry = CodingSnippet[];

export interface SolutionsMap {
  [question: string]: SolutionEntry;
}

interface AuthFormData {
    username: string;
    password: string;
    email?: string;

}


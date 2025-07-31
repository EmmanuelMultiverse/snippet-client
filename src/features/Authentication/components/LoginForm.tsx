import Button from "@/components/Button";
import Input from "@/components/Input";
import type { AuthFormData } from "@/types/types";
import { useNavigate } from "react-router";

interface LoginFormProps {
    data: AuthFormData;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginForm = ( { data, handleSubmit, handleChange }: LoginFormProps) => {
    
    const navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit} className="h-full flex flex-col gap-2">
            <Input label="username" value={data.username} handleChange={handleChange}/>
            <Input label="password" value={data.password} handleChange={handleChange}/>
            <div className="flex w-full gap-1">
                <Button handleClick={() => navigate("/register")} label="Register"/>
                <Button label="Login" type="submit"/>
            </div>
        </form>
    )
}

export default LoginForm;
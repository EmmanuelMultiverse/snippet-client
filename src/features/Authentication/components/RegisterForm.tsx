import Button from "@/components/Button";
import Input from "@/components/Input";
import type { AuthFormData } from "@/types/types"
import { useNavigate } from "react-router";

interface RegisterFormProps {
    formData: AuthFormData;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm = ({ formData, handleChange, handleSubmit }: RegisterFormProps) => {
    
    const navigate = useNavigate();
    
    return (
        <form className="h-full flex flex-col gap-2" onSubmit={handleSubmit}>
            <Input 
                label="email"
                handleChange={handleChange}
                value={formData.email || ""}
            />
            <Input 
                label="username"
                handleChange={handleChange}
                value={formData.username}
            />
            <Input 
                label="password"
                handleChange={handleChange}
                value={formData.password}
            />
            <div className="flex gap-1 w-full">
                <Button label="Register" type="submit"/>
                <Button label="Login" handleClick={() => navigate("/Login")}/>
            </div>
        </form>
    )
}

export default RegisterForm;
import type { AuthFormData } from "@/types/types";
import { useState } from "react";
import { useNavigate } from "react-router";
import RegisterForm from "@/features/Authentication/components/RegisterForm"

const RegisterPage = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState<AuthFormData>({
        username: "",
        password: "",
        email: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData(prev => ({
            ...prev,
            [name]: value,

        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Registration Complete!");

        setFormData(() => ({
            username: "",
            password: "",
            email: "",
        }))
        navigate("/Login");

    }

    return (
        <div>
            <h2> Register </h2>
            <RegisterForm 
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default RegisterPage;
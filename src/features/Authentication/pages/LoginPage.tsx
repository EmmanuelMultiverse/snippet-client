import type { AuthFormData } from "@/types/types";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {

    let navigate = useNavigate();

    const [formData, setFormData] = useState<AuthFormData>({
        username: "",
        password: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));

    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Logged In: ${formData.username} ${formData.password}`)

        setFormData(() => ({
            username: "",
            password: "",

        }))
        navigate("/questions");
    }

    return (
        <div>
            <h2> Login </h2>
            <LoginForm 
                data={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default LoginPage;
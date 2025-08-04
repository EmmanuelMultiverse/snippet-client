import type { AuthFormData } from "@/types/types";
import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { useAuth } from "@/app/AuthContext";
import { useNavigate } from "react-router";


const LoginPage = () => {

    const { handleLogin } = useAuth();
    const navigate = useNavigate();

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Logged In: ${formData.username} ${formData.password}`)

        let res = await handleLogin({ username: formData.username, password: formData.password});

        if (res.success) {
            setFormData(() => ({
                username: "",
                password: "",
    
            }))
            navigate("/homepage");
        } 
    }

    return (
        <div className="bg-[#272822] text-white rounded-md p-3 flex-col">
            <h2 className="text-center"> Login </h2>
            <LoginForm 
                data={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default LoginPage;
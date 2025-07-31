interface ButtonProps {
    label: string;
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
}

const Button = ({ label, handleClick, type = "button" }: ButtonProps) => {
    return (
        <button type={type} key="anything" onClick={handleClick} className="bg-white text-black rounded-md cursor-pointer mt-2 p-0.5 grow flex-1">{label}</button>
    )
}

export default Button;
interface ButtonProps {
    label: string,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ label, handleClick }: ButtonProps) => {
    
    return (
        <button onClick={handleClick} className="bg-white rounded-md py-1 px-3 text-black text-sm cursor-pointer">
            {label}
        </button>
    )
}

export default Button;
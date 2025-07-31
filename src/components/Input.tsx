
interface inputProps {
    label: string;
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, value, handleChange }: inputProps) => {
    return (
        <label className="h-full flex flex-col gap-2">
            {label.charAt(0).toUpperCase() + label.slice(1)}
            <input type="text" className="border-1 rounded-md" value={value} name={label} onChange={handleChange}/>
        </label>
    )
}

export default Input;
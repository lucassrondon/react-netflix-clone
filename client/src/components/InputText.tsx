import { useContext } from "react";
import { AuthFormContext, Inputs } from "../pages/LoginPage";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  name: keyof Inputs;
}

export default function Input({ id, label, type, name }: InputProps) {
  const { register } = useContext(AuthFormContext);

  if (!register) return null;

  return (
    <input
      className="text-white 
                h-10
                p-2
                bg-black 
                bg-opacity-20 
                rounded-md 
                focus:outline-none 
                focus:border-2 
                focus:border-gray-400"
      id={id}
      type={type}
      placeholder={label}
      {...register(name)}
    />
  );
}

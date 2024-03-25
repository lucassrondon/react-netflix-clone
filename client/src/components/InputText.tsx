import { useContext } from "react";
import { AuthFormContext, Inputs } from "../pages/LoginPage";
import InputError from "./InputError";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  name: keyof Inputs;
  validate?: () => true | string;
}

export default function Input({ id, label, type, name, validate }: InputProps) {
  const { register, errors } = useContext(AuthFormContext);

  if (!register) return null;

  return (
    <div className="flex flex-col gap-2">
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
        {...register(name, { required: true, validate })}
      />
      {errors[name]?.type === "required" && 
        <InputError error="This field is required." />
      }
      {errors[name]?.type === "validate" && 
        <InputError error={errors[name]?.message} />
      }
    </div>
  );
}

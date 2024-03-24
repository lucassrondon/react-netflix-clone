import { createContext, useState } from "react";
import InputText from "../components/InputText";
import NavBar from "../components/NavBar";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";

enum Variant {
  LOGIN,
  SIGN_UP,
}

export type Inputs = {
  email: string;
  password: string;
  username?: string;
};

interface AuthFormContextType {
  register: null | UseFormRegister<Inputs>;
}

export const AuthFormContext = createContext<AuthFormContextType>({
  register: null,
});

export default function LoginPage() {
  const [variant, setVariant] = useState(Variant.LOGIN);

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <div className="w-screen h-screen bg-opacity-50 bg-black">
      <NavBar />

      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-md bg-black bg-opacity-50 p-16 gap-6 rounded-md">
          <h1 className="text-3xl text-white font-semibold mb-8">
            {variant === Variant.SIGN_UP ? "Sign Up" : "Sign In"}
          </h1>

          <AuthFormContext.Provider value={{register}}>
            <form
              className="flex flex-col gap-6"
              action=""
              onSubmit={handleSubmit(onSubmit)}
            >
              <InputText id="email" label="Email" name="email" type="text"/>

              {variant === Variant.SIGN_UP ? (
                <InputText id="username" label="Username" name="username" type="text"/>
              ) : null}

              <InputText id="password" label="Password" name="password" type="text" />

              <input
                className="text-white font-semibold bg-red-600 hover:bg-red-400 cursor-pointer p-2 rounded"
                type="submit"
                value="Submit"
              />

              {variant === Variant.LOGIN ? (
                <p className="mt-12" onClick={() => setVariant(Variant.SIGN_UP)}>
                  <span className="text-white cursor-pointer hover:underline">
                    First time using netflix?
                  </span>
                </p>
              ) : (
                <p className="mt-12" onClick={() => setVariant(Variant.LOGIN)}>
                  <span className="text-white cursor-pointer hover:underline">
                    Already have an account?
                  </span>
                </p>
              )}
            </form>
          </AuthFormContext.Provider>
          
        </div>
      </div>
    </div>
  );
}

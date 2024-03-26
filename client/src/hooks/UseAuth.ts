import axios from "axios";

const UseAuthHook = () => {
  const signUp = async ({
    email,
    username,
    password,
  }: {
    email: string;
    username: string;
    password: string;
  }) => {
    const response = await axios.post("http://localhost:8080/auth/signup", {
      email,
      username,
      password,
    });

    return response.data;
  };

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const response = await axios.post("http://localhost:8080/auth/login", {
      email,
      password,
    });
    return response.data;
  };

  const fetchUser = async () => {};

  return { signUp, login, fetchUser };
};

export default UseAuthHook;

import axios from "axios";
import Cookie from "universal-cookie";

const cookie = new Cookie();

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
    const { token } = response.data.value;
    cookie.set("session_token", token);
    return response.data.value;
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
    const { token } = response.data.value;
    cookie.set("session_token", token);
    return response.data.value;
  };

  const fetchUser = async () => {};

  return { signUp, login, fetchUser };
};

export default UseAuthHook;

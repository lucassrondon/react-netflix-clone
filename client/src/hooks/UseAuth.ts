import axios from "axios";
import Cookie from "universal-cookie";
import { UseDispatch, useDispatch } from "react-redux";
import { setUser, clearUser } from "../features/userSlice";

const cookie = new Cookie();

const UseAuth = () => {
  const dispatch = useDispatch();

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
    const { token, user } = response.data.value;
    cookie.set("session_token", token);
    dispatch(setUser({ email: user.email, username: user.username }));
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
    const { token, user } = response.data.value;
    cookie.set("session_token", token);
    dispatch(setUser({ email: user.email, username: user.username }));
  };

  const fetchUser = async () => {
    try {
      const sessionToken = cookie.get("session_token");

      const response = await axios.get("http://localhost:8080/auth/me", {
        headers: {
          Authorization: `Bearer ${sessionToken}`,
        },
      });

      const { user } = response.data.value;

      if (!user) {
        return dispatch(clearUser());
      }

      dispatch(
        setUser({
          email: user.email,
          username: user.username,
        })
      );
    } catch (error) {
      return dispatch(clearUser());
    }
  };

  return { signUp, login, fetchUser };
};

export default UseAuth;

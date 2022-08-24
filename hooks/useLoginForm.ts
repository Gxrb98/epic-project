import { ChangeEvent, useState } from "react";
import { postsignIn, postSignUp } from "../services/auth";
import { getUsers } from "../services/user";
import useAuth from "./useAuth";

interface form {
  user?: string,
  password?: string
}



const useLoginForm = (initialState: form) => {

  const [textInput, setTextInput] = useState<form>(initialState);
  const { saveToken } = useAuth();

  const handlerForm = (e: ChangeEvent<HTMLInputElement>) => {
    const newValues = { ...textInput, [e.target.name]: e.target.value }
    setTextInput(newValues)
  }

  const handleSignIn = async () => {
    let loginForm = {
      email: textInput.user,
      pass: textInput.password
    }
    try {
      const { data } = await postsignIn(loginForm);
      if (!data.token) {
        console.log(data)
      }
      window.localStorage.setItem('token', data.token);
      saveToken(data.token)
      console.log(data.token);

    } catch (error) {
      window.location.href = "/notfound"
      console.log(error);
    }
  };

  const getusers = async () => {
    try {
      const { data } = await getUsers();
      if (!data) {
        console.log(data)
      }
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }



  const handleLogOut = () => {
    window.localStorage.removeItem('token')
    saveToken(null)
  }

  return {
    textInput,
    handlerForm,
    handleSignIn,
    handleLogOut,
    getusers
  };
}


export default useLoginForm

//         "email": "admin@localhost",
//         "pass": "admin"
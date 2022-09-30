import { ChangeEvent, useState, FormEvent, useEffect } from "react";
import { postsignIn } from "../services/auth";
import { getUsers } from "../services/user";
import useAuth from "./useAuth";
import { LoginForm } from "./types";
import { LOCAL_STORAGE_NAME } from "../pages/index"

const useLoginForm = (initialState: LoginForm) => {

  const [textInput, setTextInput] = useState<LoginForm>(initialState);
  const { saveToken, switchRememberMe, rememberMe, token } = useAuth();
  const handlerForm = (e: ChangeEvent<HTMLInputElement>) => {
    const newValues = { ...textInput, [e.target.name]: e.target.value }
    setTextInput(newValues)
  }

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let loginForm = {
      email: textInput.user,
      pass: textInput.password
    }
    try {
      const { data } = await postsignIn(loginForm);
      if (!data.token) {
        console.log(data)
      }
      saveToken(data.token)
      if(rememberMe){
        window.localStorage.setItem(LOCAL_STORAGE_NAME, data.token);
      }
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


  const handleRememberMe = () =>{
    switchRememberMe()
  }

  
  const handleLogOut = () => {
    window.localStorage.removeItem(LOCAL_STORAGE_NAME)
    saveToken(null)
  }

  return {
    textInput,
    setTextInput,
    handlerForm,
    handleSignIn,
    handleLogOut,
    handleRememberMe,
    getusers
  };
}

export default useLoginForm

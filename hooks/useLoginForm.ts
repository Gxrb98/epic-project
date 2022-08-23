import { ChangeEvent, useState } from "react";
import api from "../lib/api";
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
      const { data } = await api.post("/auth/signin", loginForm);
      if (data.token) {
        window.localStorage.setItem('token', data.token);
        saveToken(data.token)
      }

    } catch (error) {
      window.location.href = "/notfound"
      console.log(error);
    }
  };

  const handleLogOut = () =>{
    window.localStorage.removeItem('token')
    saveToken(null)
  }

  return {
    textInput,
    handlerForm,
    handleSignIn,
    handleLogOut
  };
}


export default useLoginForm

//         "email": "admin@localhost",
//         "pass": "admin"
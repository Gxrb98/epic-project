import { ChangeEvent, useState } from "react";
import api from "../lib/api";
import { useAuth } from "../context/AuthContext";


interface form {
  user: string,
  password: string
}



const useLoginForm = (initialState: form) => {

  const [textInput, setTextInput] = useState<form>(initialState);
  const { login } = useAuth();

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
      window.localStorage.setItem('token', JSON.stringify(data.token));

      if(data.token){
        login()
      }

    } catch (error) {
      console.log(error);
    }
  };
  return {
    textInput, 
    handlerForm, 
    handleSignIn
  };
}


export default useLoginForm

//         "email": "admin@localhost",
//         "pass": "admin"
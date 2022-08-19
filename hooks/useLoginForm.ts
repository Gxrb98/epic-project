import { ChangeEvent, useState, MouseEventHandler } from "react";
import api from "../lib/api";

interface form {
  user: string,
  password: string
}

const useLoginForm = (initialState: form) => {

  const [textInput, setTextInput] = useState<form>(initialState);

  const handlerForm = (e: ChangeEvent<HTMLInputElement>) => {
    const newValues = { ...textInput, [e.target.name]: e.target.value }
    setTextInput(newValues)
  }

  const handleSignIn = async () => {
    try {
      const { data } = await api.post("/auth/signin", { textInput });
      console.log(data);
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
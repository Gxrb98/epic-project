import { ChangeEvent, useState } from "react";


interface form {
  user: string,
  password: string
}

const useTextInput = (initialState: form) => {

  const [textInput, setTextInput] = useState<form>(initialState);

  const handlerForm = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    const newValues = { ...textInput, [e.target.name]: e.target.value }
    setTextInput(newValues)
  }

  return {
    textInput, handlerForm
  };
}


export default useTextInput
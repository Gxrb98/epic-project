import { ChangeEvent, useState } from "react";

export const useTextInput = (evnt) : ChangeEvent<HTMLInputElement> => {

  const [textInput, setTextInput] = useState({
    user: '',
    password: ''
  });
 
 // const target = evnt.target as HTMLInputElement
  setTextInput(
    {
      ...textInput, [evnt.target.name]: evnt.target.value
    }
  );

  return {
    textInput,
    useTextInput,
    evnt
  };
}

import type { NextPage } from 'next';
import { useState } from 'react';

interface Props{
    user: string,
    password: string
}

const LoginPartOne: NextPage<Props> = ({user, password}) => {
  const [textInput, setTextInput] = useState({
    user,
    password
  });

  const inputHandler = (event:any) =>{
    event.persist
    setTextInput(
      {
        ...textInput,  [event.target.name]: event.target.value
      }
    )
  }

  const submitBtnHandler = () =>{
    alert(`Iniciaste sesión con los siguientes datos: \n Usuario: ${textInput.user} \n Contraseña: ${textInput.password}`)
  }

  return (
    <>
      <header>
        <h1>Bienvenido</h1>
        <h2>Ingresa como Desarrollador</h2>
      </header>
      <div>
        <div>
          <label htmlFor='user'>Usuario</label>
        </div>
        <div>
          <input name='user' type='text' onChange={inputHandler}/>
        </div>
        <div>
          <label htmlFor='password'>Contraseña</label>
        </div>
        <div>
          <input name='password' type='password' onChange={inputHandler}/>
        </div>
        <button onClick={submitBtnHandler}>Ingresar</button>
      </div>
    </>
  )
}

export default LoginPartOne
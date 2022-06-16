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
    <div className='login-container'>
      <div>
        <header>
          <h1>Bienvenido</h1>
          <h2>Ingresa como Desarrollador</h2>
        </header>
        <div className='login-body'>
          <div className='login-body-block'>
            <div>
              <label htmlFor='user'>Usuario</label>
            </div>
            <div className='textInput'>
              <input name='user' type='text' onChange={inputHandler}/>
            </div>
          </div>
         <div className='login-body-block'>
          <div>
              <label htmlFor='password'>Contraseña</label>
            </div>
            <div className='textInput'>
              <input name='password' type='password' onChange={inputHandler}/>
            </div>
         </div>
         <div className='loginBtn-container'>
          <button onClick={submitBtnHandler}>Ingresar</button>
         </div>
        </div>
        <div className='login-poligon'>
a
        </div>
      </div>
    </div>
  )
}

export default LoginPartOne
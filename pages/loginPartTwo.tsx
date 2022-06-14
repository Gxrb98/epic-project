import type { NextPage } from 'next';
import { useState } from 'react';


interface Props{
    user: string,
    password: string
}
const loginPartTwo: NextPage<Props> = ({user, password}) => {
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

        <div className="wave">
          <img src="assets/lo" alt="" />
        </div>

        <header>
          <h1>Bienvenido</h1>
          <h2>Ingresa como Desarrollador</h2>
        </header>


        <div className='login-design'>
          <div className=''>
            <div>
              <label htmlFor='user'>Usuario</label>
            </div>

            <div className=''>
              <input name='user' type='text' onChange={inputHandler}/>
            </div>
          </div>


         <div className=''>
          <div>
              <label htmlFor='password'>Contraseña</label>
            </div>


            <div className=''>
              <input name='password' type='password' onChange={inputHandler}/>
            </div>


         </div>
         <div className=''>
          <button onClick={submitBtnHandler}>Ingresar</button>
         </div>
        </div>
      </div>
    </div>
  )
}



export default loginPartTwo
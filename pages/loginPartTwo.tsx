import type { NextPage } from 'next';
import { useState } from 'react';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface Props {
  user: string,
  password: string
}
const LoginPartTwo: NextPage<Props> = ({ user, password }) => {
  const [textInput, setTextInput] = useState({
    user,
    password
  });
  const { t } = useTranslation('common');
  const inputHandler = (event: any) => {
    event.persist
    setTextInput(
      {
        ...textInput, [event.target.name]: event.target.value
      }
    )
  }

  const submitBtnHandler = () => {
    alert(`Iniciaste sesión con los siguientes datos: \n Usuario: ${textInput.user} \n Contraseña: ${textInput.password}`)
  }

  return (
    <div className='login-container login2'>
      <div className='container'>
        <header>
          <h2>{t("loginText2")}</h2>
        </header>
        <div className='login-body'>
          <div className='login-body-block'>
            <div>
              <label htmlFor='user'>{t("labelUser")}</label>
            </div>
            <div className='textInput2'>
              <input name='user' type='text' onChange={inputHandler} />
            </div>
          </div>
          <div className='login-body-block'>
            <div>
              <label htmlFor='password'>{t("labelPassword")}</label>
            </div>
            <div className='textInput2'>
              <input name='password' type='password' onChange={inputHandler} />
            </div>
          </div>
          <div className='div-center'>
            <button onClick={submitBtnHandler}>{t("loginBtn")}</button>
          </div>
        </div>
      </div>
    </div>


  )
}


export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  }
}




export default LoginPartTwo
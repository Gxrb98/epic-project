import type { NextPage } from 'next';
import { useState } from 'react';
import { useTextInput } from '../hooks/useTextInput'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface Props {
  user: string,
  password: string
}

const LoginPartOne: NextPage<Props> = ({ user, password }) => {
  // const [textInput, setTextInput] = useState({
  //   user,
  //   password
  // });
  const { t } = useTranslation('common');

  // const inputHandler = (event: any) => {
  //   event.persist
  //   setTextInput(
  //     {
  //       ...textInput, [event.target.name]: event.target.value
  //     }
  //   )
  // }

  // const submitBtnHandler = () => {
  //   alert(`Iniciaste sesión con los siguientes datos: \n Usuario: ${textInput.user} \n Contraseña: ${textInput.password}`)
  // }

const { textInput, evnt } = useTextInput()

  return (
    <div className='login-container login1'>
      <div className='container'>
        <header>
          <h2>{t("loginText1")}</h2>
        </header>
        <div className='login-body'>
          <div className='login-body-block'>
            <div>
              <label htmlFor='user'>{t("labelUser")}</label>
            </div>
            <div className='textInput1'>
              <input name='user' value={textInput.user} type='text' onChange={useTextInput} />
            </div>
          </div>
          <div className='login-body-block'>
            <div>
              <label htmlFor='password'>{t("labelPassword")}</label>
            </div>
            <div className='textInput1'>
              <input name='password' value={textInput.password} type='password' />
            </div>
          </div>
          <div className='div-center'>
            <button >{t("loginBtn")}</button>
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

export default LoginPartOne
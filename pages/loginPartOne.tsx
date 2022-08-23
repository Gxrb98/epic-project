import useLoginForm from '../hooks/useLoginForm';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { postsignIn } from '../services/auth';

const LoginPartOne = () => {
  const { t } = useTranslation('common');
  const { textInput, handlerForm, handleSignIn, getusers } = useLoginForm({ user: "", password: "" });

  const submitBtnHandler = () => {
    alert(`Iniciaste sesión con los siguientes datos: \n Usuario: ${textInput.user} \n Contraseña: ${textInput.password}`)
  }



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
              <input required name='user' type='text' value={textInput.user} onChange={(e) => handlerForm(e)} />
            </div>
          </div>
          <div className='login-body-block'>
            <div>
              <label htmlFor='password'>{t("labelPassword")}</label>
            </div>
            <div className='textInput1'>
              <input required name='password' type='password' value={textInput.password} onChange={(e) => handlerForm(e)} />
            </div>
          </div>
          <div className='div-center'>
            <button onClick={handleSignIn}>{t("loginBtn")}</button>
            <button onClick={getusers}>{t("getusers")}</button>
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
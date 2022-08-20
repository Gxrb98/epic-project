import useLoginForm from '../hooks/useLoginForm';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


const LoginPartTwo = () => {
  const { t } = useTranslation('common');
  const { textInput, handlerForm, handleSignIn } = useLoginForm({ user: "", password: ""});

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
              <input name='user' type='text' value={textInput.user} onChange={(e) => handlerForm(e)} />
            </div>
          </div>
          <div className='login-body-block'>
            <div>
              <label htmlFor='password'>{t("labelPassword")}</label>
            </div>
            <div className='textInput2'>
              <input name='password' type='password' value={textInput.password} onChange={(e) => handlerForm(e)} />
            </div>
          </div>
          <div className='div-center'>
            <button onClick={handleSignIn}>{t("loginBtn")}</button>
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
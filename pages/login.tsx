import useLoginForm from '../hooks/useLoginForm';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState, useEffect } from 'react';
const Login = () => {
  const { t } = useTranslation('common');
  const { textInput, handlerForm, handleSignIn } = useLoginForm({ user: "", password: "" });

  const [rememberMe, setRememberMe] = useState(false)

  const handleRememberMe = () => {
    
    console.log("Al entrar soy: ", rememberMe)
    setRememberMe(!rememberMe)
    console.log("actualmente soy: ", rememberMe)

    if(!rememberMe){
      window.localStorage.setItem("devFarmRememberMe", JSON.stringify(true))
    }else{
      window.localStorage.removeItem("devFarmRememberMe")
    }
  }

  
  

  useEffect(() => {
      
  }, [rememberMe])
  return (
    <form onSubmit={(e) => handleSignIn(e)} className='login-container login1'>
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
            <button type="submit">{t("loginBtn")}</button>
          </div>
        </div>
        <div className='btn-check'>
            <input type="checkbox" checked={rememberMe} name="rememberme" id="rememberme" className='checkbox' onClick={handleRememberMe }/>
            <label htmlFor='rememberme' className='lbl-switch'>{t("remember")} {rememberMe ? "true": false}</label>
        </div>
      </div>
    </form>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  }
}

export default Login
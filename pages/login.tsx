import LoginPartOne from "./loginPartOne";
import LoginPartTwo from "./loginPartTwo";
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'



const Login: NextPage = () =>{

    return(
        <div className="div-center login-view">
            <div className="div-center">
                <LoginPartOne/>
                <LoginPartTwo/>
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
export default Login
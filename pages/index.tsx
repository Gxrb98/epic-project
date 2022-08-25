import type { NextPage } from 'next'
import useAuth from "../hooks/useAuth";
import { useRouter } from 'next/router'
import { useCount, useDispatchCount } from '../context/Counter'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Login from './login';
import Home from './home';
import { MutableRefObject, useEffect, useRef } from 'react';
import useIsMounted from '../hooks/useIsMounted';


const Index: NextPage = ({ users }: any) => {


  // documentar
  /**
   * 
   */
  const count = useCount();
  const dispatch = useDispatchCount();
  const { token, saveToken } = useAuth();
  const { t } = useTranslation('common')
  const router = useRouter()

  const mounted: MutableRefObject<boolean> = useRef(false)


  const { datos, isloading, err, } = useIsMounted("https://api.github.com/repos/vercel/next.js", "get")

  const getTokenFromStorage = () => {
    const USER_TOKEN: string | null = window.localStorage.getItem('token')
    saveToken(USER_TOKEN)
}

  useEffect(() => {
    getTokenFromStorage()
  }, []);

  if (token) {
    return (
      <Home />
    )
  } else {
    return (
      <Login />
    )
  }
}

export async function getStaticProps({ locale, clientPromise }: any) {

  // const { data } = await axios.get<{}>('https://appdevv.herokuapp.com/api/user')
  try {
    return {
      props: {
        users: "data",
        ...await serverSideTranslations(locale, ['common']),
      },
    }
  } catch (e) {
    console.error(e)
  }
}




export default Index







  // const handleIncrease = (event: void) =>
  //   dispatch({
  //     type: 'INCREASE',
  //   })
  // const handleDecrease = (event: void) =>
  //   dispatch({
  //     type: 'DECREASE',
  //   })



  // useEffect(() => {

  //   const cancelToken = axios.CancelToken.source();

  //   const getData = () => {
  //     axios.get("https://api.github.com/repos/vercel/next.js", {
  //       cancelToken: cancelToken.token
  //     })
  //       .then(({ data }) => console.log("montado", data))
  //       .catch((err) => console.log(err))
  //   }
  //   getData()

  //   return () => cancelToken.cancel();
  // }, [])







  

// export async function getServerSideProps({ locale }: any) {
// try {
//   await clientPromise
//   console.log(clientPromise)
//  const { data } = await axios.get<{ id: number, stargazers_count: number }>('https://api.github.com/repos/vercel/next.js')
//   //copia y pega la url en el navegador para ver todo lo q trae ese endpoint
//   //esto es literalmente lo mas util de typescript poder dejar por escrito
//   //los keys y los tipos de datos que trae el endpoint
//   // const stars = data.stargazers_count
//   return {
//     props: {
//       // stars: stars,
//       isConnected: true,
//     
//     },
//   }
// } catch (e) {
//   console.error(e)
//   return {
//     props: { isConnected: false },
//   }
// }

import type { NextPage } from 'next'
//import Head from 'next/head'
//import Image from 'next/image'
//import styles from "../styles/Home.module.css";
import { useAuth } from "../context/AuthContext";
//import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCount, useDispatchCount } from '../context/Counter'
//import axios from 'axios'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
//import { dbConnect } from "./api/utils/connect";
//import clientPromise from '../lib/mongodb'
import Login from './login';
const Home: NextPage = ({ stars, id, isConnected }: any) => {

  // dbConnect();


  const count = useCount();
  const dispatch = useDispatchCount();
  const { user, login, logout } = useAuth();
  const { t } = useTranslation('common')
  const router = useRouter()
  const handleIncrease = (event: void) =>
    dispatch({
      type: 'INCREASE',
    })
  const handleDecrease = (event: void) =>
    dispatch({
      type: 'DECREASE',
    })

    if(user) {
      return (
        <div>
          You Are logged In
        </div>
      )
    }else{
      return (
        <Login/>
      )
    }
}

// export async function getStaticProps({ locale, clientPromise }: any) {
export async function getServerSideProps({ locale, clientPromise }: any) {
  try {
    await clientPromise
    console.log(clientPromise)
    // const { data } = await axios.get<{ id: number, stargazers_count: number }>('https://api.github.com/repos/vercel/next.js')
    //copia y pega la url en el navegador para ver todo lo q trae ese endpoint
    //esto es literalmente lo mas util de typescript poder dejar por escrito
    //los keys y los tipos de datos que trae el endpoint
    // const stars = data.stargazers_count
    return {
      props: {
        // stars: stars,
        isConnected: true,
        ...await serverSideTranslations(locale, ['common']),
      },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}



export default Home



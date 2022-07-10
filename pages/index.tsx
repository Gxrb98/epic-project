import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Home.module.css";
import { useAuth } from "../context/AuthContext";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCount, useDispatchCount } from '../context/Counter'
import axios from 'axios'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { dbConnect } from "./api/utils/connect";
import clientPromise from '../lib/mongodb'
const Home: NextPage = ({ stars, id, isConnected }: any) => {

  // dbConnect();


  const count = useCount();
  const dispatch = useDispatchCount();
  const { user, login, logout } = useAuth();
  const { t } = useTranslation('common')
  const router = useRouter()
  //aqui te deje una tarea sencilla gabo arregla este "err" ocasionado por typeScript
  const handleIncrease = (event: void) =>
    dispatch({
      type: 'INCREASE',
    })
  const handleDecrease = (event: void) =>
    dispatch({
      type: 'DECREASE',
    })

  return (
    <div className={styles.container}>
      <Head>
        <title>title={t('title')}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{t('h1')}</h1>
      <h2>Josu El matatan</h2>
      {/* <p>Next.js has {stars} ⭐️</p> */}
      <Link href="/preact-stars">
        <a>How about preact?</a>
      </Link>
      <p>{JSON.stringify(isConnected)}</p>
      <p>Counter: {count}</p>
      <button onClick={() => handleIncrease()}>Increase</button>
      <button onClick={() => handleDecrease()}>Decrease</button>
      <p>
        <Link href={{ pathname: "/about", query: { slug: "data" }, }} >
          <a>ESTO ES UN LINK :/ PERO HACE FALTA PONERLE ESTILO</a>
        </Link>
      </p>
      <br></br>
      <p>
        <Link
          href='/'
          locale={router.locale === 'en' ? 'es' : 'en'}
        ><a>CAMBIAR DE IDIOMA</a></Link>
      </p>

      {/* <button onClick={() => window.Location = 'es'}>texto del boton</button> */}
      <main>
        <div>
          <h1>Hello Context</h1>
          <h2>User: {user ? "login" : "logout"}</h2>
          <div>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </main>
    </div>
  )
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



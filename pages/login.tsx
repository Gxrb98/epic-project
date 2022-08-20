import { MouseEventHandler, useState } from "react";
import LoginPartOne from "./loginPartOne";
import LoginPartTwo from "./loginPartTwo";
import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import api from "../lib/api";
import { useLocalStorage, useSessionStorage } from "../hooks/useStorage"


const Login: NextPage = () => {
  const [id, setid] = useState("");

  // const [value, setValue, remove] = useLocalStorage("key", "value");

  const handleSubmitGetClient = async () => {
    try {
      const { data } = await api.get("/user/");
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClient = async (e, _id: Number) => {
    e.preventDefault();
    try {
      const { data } = await api.delete(`/user/${_id}`, { headers: { 'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZ…DU5fQ.Ag6i_wbQFcR6__mcjDGubcH56dGMymFYEs2sxhGLPzY" } });
      console.log(data)
    } catch (error: any) {
      console.log(error);
    }
  }

  const handleSignIn = async () => {
    try {
      const { data } = await api.post("/auth/signin", {
        "email": "admin@localhost",
        "pass": "admin"
      });
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  const handlesignup = async () => {
    try {
      const { data } = await api.post("/auth/signup", {
        "email": "asdasdasdasdas@localhost",
        "pass": "1234"
      });
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="div-center login-view">
      <div className="div-center">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* <button onClick={() => setValue("asdasdasdasdasdas")}><text>setValue</text></button> */}
          <button onClick={() => handlesignup()}><text>signup</text></button>
          <button onClick={() => handleSignIn()}><text>handleSignin</text></button>
          <button onClick={() => handleSubmitGetClient()}><text>get</text></button>
          <input value={id} onChange={(e) => setid(e.target.value)}></input>
          <button onClick={(e) => handleDeleteClient(e, id)}><text>delete</text></button>
        </div>
        <LoginPartOne />
        <LoginPartTwo />
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }: any) {

  return {
    props: {
      ...await serverSideTranslations(locale, ['common'])
    },
  }
}
export default Login
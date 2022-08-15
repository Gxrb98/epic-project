import { useState } from "react"
import LoginPartOne from "./loginPartOne";
import LoginPartTwo from "./loginPartTwo";
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import api from "../lib/api";

const Login: NextPage = () => {
  const [id, setid] = useState("");

  const handleSubmitGetClient = async () => {
    try {
      const { data } = await api.get("/user/");
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClient = async (e, _id) => {
    e.preventDefault();
    try {
      const { data } = await api.delete(`/user/${_id}`);
      console.log(data.message)
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  }

  const handleSignin = async () => {
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
        "email": "pepito@localhost",
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
          <button onClick={() => handlesignup()}><text>signup</text></button>
          <button onClick={() => handleSignin()}><text>handleSignin</text></button>
          <button onClick={() => handleSubmitGetClient()}><text>get</text></button>
          <input value={id} onChange={(e) => setid(e.target.value)}></input>
          <button onClick={(e) => handleDeleteClient(e, id)}><text>delete</text></button>
        </div>
        <LoginPartOne user="" password="" />
        <LoginPartTwo user="" password="" />
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
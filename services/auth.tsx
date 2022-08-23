import api from "../lib/api";
import { userAuth } from "./types";

export const postsignIn = (loginForm: userAuth) =>
    api.post("/auth/signin", loginForm);

export const postSignUp = (loginForm: userAuth) =>
    api.post("/auth/signup", loginForm);
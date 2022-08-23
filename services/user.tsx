import api from "../lib/api";

import { user } from "./types";

export const getUsers = () =>
    api.get("/user/");

export const getUserById = (param: string) =>
    api.get("/user/" + param);

export const updateUser = (usuario: user) =>
    api.patch("/user/" + usuario._id, { usuario });
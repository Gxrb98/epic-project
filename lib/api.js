import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/api",
});
// const api = axios.create({
//     baseURL: "https://appdevv.herokuapp.com/api",
// });


export default api;
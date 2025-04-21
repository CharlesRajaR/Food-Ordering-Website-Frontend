import axios from "axios"

export const API_URL = "https://artistic-orel-rcraja-735c7b5f.koyeb.app"

export const api = axios.create({
    baseURL:API_URL,
    headers:{
        "Content-Type":"application/json",
    }
});



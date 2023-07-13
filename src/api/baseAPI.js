import axios from "axios";

export const baseURlView = axios.create({
    baseURL:process.env.REACT_APP_API_PROD_VIEW,
    headers:{
        "Content-Type": "application/json",
    }
})

export const baseURlPost = axios.create({
    baseURL:process.env.REACT_APP_API_PROD_POST,
  
    headers:{
        "secretkey":"Bearer",
        "secretcode": "!",
        "Content-Type": "application/json",
    }
})
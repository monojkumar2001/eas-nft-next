import axios from "axios";

const API_URL = process.env.NODE_ENV === "production" ? "https://admin.accurentvc.com/" : "https://admin.accurentvc.com/"


const createInstance = (baseUrl) =>{
    const instance = axios.create({
        baseURL:baseUrl,
        headers:{"Content-Type":"application/json"},
    })

    return instance
}

export default createInstance(API_URL)
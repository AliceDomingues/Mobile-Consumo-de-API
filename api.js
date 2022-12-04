import axios from "axios";
import { Alert } from "react-native";

const api = axios.create({
baseURL: "https://api.github.com",
})

export default function obterUsuarios(){
    try{
        const response = base.get('users')
        return response
    } catch (error) {
        alert(error.toString())
    }
}

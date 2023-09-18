import axios from "axios"
import { URL } from "../shared/constants"

export const fetchAllChats = async () => {
    return await axios.get(`${URL}/chatlist`)
}

export const fetchConversetion = async () => {
    return await axios.get(`${URL}/chat`)
}
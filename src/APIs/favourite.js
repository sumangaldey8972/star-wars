import axios from "axios"
import { db_url } from "../config/basUrl"


export const favourite_character = async (details) => {
    try {
        let response = await axios.post(`${db_url}/character`, details, {
            headers: {
                'Authorization': `Bearer ${details.token}`
            }
        })
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error.response)
        return error.response.data
    }
}


export const get_favourite_character = async () => {
    try {
        let response = await axios.post(`${db_url}/character`, {
            headers: {
                'Authorization': `Bearer `
            }
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}

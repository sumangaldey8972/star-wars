
import axios from "axios"
import { base_url } from "../config/basUrl"

export const character_list = async (currentPage) => {
    try {
        let response = await axios.get(`${base_url}/?page=${currentPage}`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export const get_character_by_id = async (id) => {
    try {
        let response = await axios.get(`${base_url}/${id}`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}
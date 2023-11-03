import axios from "axios"

export const get_species = async (url) => {
    try {
        let response = await axios.get(`${url}`)
        return response.data
    } catch (error) {
        return error.response.data
    }
}
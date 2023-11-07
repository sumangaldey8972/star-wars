import axios from "axios";
import { db_url } from "../config/basUrl";

export const sign_in = async (creds) => {
    try {
        const response = await axios.post(`${db_url}/user/login`, creds);
        return response.data;
    } catch (error) {
        console.log(error)
        return error.response.data;
    }
};
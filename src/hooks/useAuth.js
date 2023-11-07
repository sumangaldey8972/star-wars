import { useMutation } from "react-query"
import { sign_in } from "../APIs/authentication"


export const useSignInUser = () => {
    return useMutation(sign_in)
}
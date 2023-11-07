import { useMutation, useQueryClient } from "react-query"
import { favourite_character } from "../APIs/favourite"


export const useFavouriteCharacter = (details) => {
    const queryClient = useQueryClient()
    return useMutation(favourite_character, {
        onSuccess: (response) => {
            if (response.status) {

                // queryClient.invalidateQueries('')
            }
        }
    })
}
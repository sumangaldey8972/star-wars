import { useQuery } from "react-query"
import { character_list, get_character_by_id } from "../APIs/characters"


export const useCharacterList = (currentPage) => {
    return useQuery(['character-list', currentPage], () => character_list(currentPage))
}

export const useCharacterById = (id) => {
    return useQuery(['character-details', id], () => get_character_by_id(id))
}
import { useQuery } from "react-query"
import { get_species } from "../APIs/species"


export const useGetSpecies = (url) => {
    return useQuery(['film', url], () => get_species(url))
}
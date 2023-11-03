import { useQuery } from "react-query"
import { get_starships } from "../APIs/starShips"

export const useGetStarships = (url) => {
    return useQuery(['film', url], () => get_starships(url))
}
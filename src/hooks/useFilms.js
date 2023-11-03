import { useQuery } from "react-query"
import { get_film } from "../APIs/film"


export const useGetFilms = (url) => {
    return useQuery(['film', url], () => get_film(url))
}
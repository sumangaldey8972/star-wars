import { useQuery } from "react-query"
import { get_home } from "../APIs/homeWorld"

export const useGetHome = (url) => {
    return useQuery(['home', url], () => get_home(url))
}
import { useQuery } from "react-query"
import { get_vehicles } from "../APIs/vehicles"

export const useGetVehicles = (url) => {
    return useQuery(['film', url], () => get_vehicles(url))
}
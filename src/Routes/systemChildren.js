import { Navigate } from "react-router-dom";
import CharacterList from "../Pages/CharacterList";
import CharacterDetails from "../Pages/CharacterDetails";


export const systemChildren = [
    { element: <Navigate to="/dashboard" />, index: true },
    { path: "dashboard", element: <CharacterList /> },
    { path: "details/:id", element: <CharacterDetails /> }
]
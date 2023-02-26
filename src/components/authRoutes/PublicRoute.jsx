import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { selectAuthToken } from "redux/auth/auth.selectors"

export const PublicRoute = () =>{
    const token = useSelector(selectAuthToken);
    return token ? <Navigate to='/contacts' replace/> : <Outlet/> ;
}
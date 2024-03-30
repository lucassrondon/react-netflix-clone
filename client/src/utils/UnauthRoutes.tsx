import { useSelector } from "react-redux";
import { RootState } from '../app/store';
import { Navigate, Outlet } from "react-router-dom";

export default function UnauthRoutes() {
    const {user , isLoading} = useSelector((state: RootState ) => state.user.value);

    if (isLoading) return <div>Loading</div>
    if (user) return <Navigate to='/browse' />
    return <Outlet />
}
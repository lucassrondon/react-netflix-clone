import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export default function PrivateRoutes() {
  const { user, isLoading } = useSelector(
    (state: RootState) => state.user.value
  );

  if (isLoading) return <div>Loading...</div>;
  return user ? <Outlet /> : <Navigate to="/login" />;
}
